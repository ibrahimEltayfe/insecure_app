#!/bin/bash

set -e  # Exit on error

# Configuration
VERSION="17.2.11"
FRIDA_BINARY=""
ARCH=$(adb shell getprop ro.product.cpu.abi)

# Determine correct frida-server binary
case "$ARCH" in
    arm64-v8a)
        FRIDA_BINARY="frida-server-${VERSION}-android-arm64"
        ;;
    armeabi-v7a)
        FRIDA_BINARY="frida-server-${VERSION}-android-arm"
        ;;
    x86)
        FRIDA_BINARY="frida-server-${VERSION}-android-x86"
        ;;
    x86_64)
        FRIDA_BINARY="frida-server-${VERSION}-android-x86_64"
        ;;
    *)
        echo "[❌] Unsupported ABI: $ARCH"
        exit 1
        ;;
esac

# Download if not present
if [ ! -f "${FRIDA_BINARY}" ]; then
    echo "[⬇️ ] Downloading ${FRIDA_BINARY}.xz ..."
    wget "https://github.com/frida/frida/releases/download/${VERSION}/${FRIDA_BINARY}.xz"
else
    echo "[✔️ ] File ${FRIDA_BINARY}.xz already exists. Skipping download."
fi

# Extract if not already
if [ ! -f "${FRIDA_BINARY}" ]; then
    echo "[📦] Extracting..."
    xz -d "${FRIDA_BINARY}.xz"
else
    echo "[✔️ ] Already extracted."
fi

# Make executable
#chmod 777 "$FRIDA_BINARY"

# Push to Android and run
adb root && adb remount
adb push "$FRIDA_BINARY" /data/local/tmp/frida-server
adb shell "chmod 777 /data/local/tmp/frida-server && /data/local/tmp/frida-server &"

echo "[✅] frida-server is now running!"

