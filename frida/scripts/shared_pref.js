Java.perform(function () {
    try {
        var EditorImpl = Java.use("android.app.SharedPreferencesImpl$EditorImpl");

        // putString
        if (EditorImpl.putString) {
            var origPutString = EditorImpl.putString;
            origPutString.implementation = function (key, value) {
                console.log("[*] putString key=" + key + " value=" + value);
                return origPutString.call(this, key, value);
            };
        }

        // putBoolean
        if (EditorImpl.putBoolean) {
            var origPutBoolean = EditorImpl.putBoolean;
            origPutBoolean.implementation = function (key, value) {
                console.log("[*] putBoolean key=" + key + " value=" + value);
                return origPutBoolean.call(this, key, value);
            };
        }

        // putInt
        if (EditorImpl.putInt) {
            var origPutInt = EditorImpl.putInt;
            origPutInt.implementation = function (key, value) {
                console.log("[*] putInt key=" + key + " value=" + value);
                return origPutInt.call(this, key, value);
            };
        }

        // putLong
        if (EditorImpl.putLong) {
            var origPutLong = EditorImpl.putLong;
            origPutLong.implementation = function (key, value) {
                console.log("[*] putLong key=" + key + " value=" + value);
                return origPutLong.call(this, key, value);
            };
        }

        // putFloat
        if (EditorImpl.putFloat) {
            var origPutFloat = EditorImpl.putFloat;
            origPutFloat.implementation = function (key, value) {
                console.log("[*] putFloat key=" + key + " value=" + value);
                return origPutFloat.call(this, key, value);
            };
        }

        // putStringSet
        if (EditorImpl.putStringSet) {
            var origPutStringSet = EditorImpl.putStringSet;
            origPutStringSet.implementation = function (key, valueSet) {
                console.log("[*] putStringSet key=" + key + " value=" + valueSet);
                return origPutStringSet.call(this, key, valueSet);
            };
        }
    } catch (e) {
        console.log("[-] Failed to hook EditorImpl puts:", e);
    }

    // 3. Hook getString on SharedPreferencesImpl
    try {
        var SharedPrefsImpl = Java.use("android.app.SharedPreferencesImpl");
        if (SharedPrefsImpl.getString) {
            var origGetString = SharedPrefsImpl.getString;
            origGetString.implementation = function (key, def) {
                var ret = origGetString.call(this, key, def);
                console.log("[*] getString key=" + key + " default=" + def + " returned=" + ret);
                return ret;
            };
        }
    } catch (e) {
        console.log("[-] Failed to hook SharedPreferencesImpl.getString:", e);
    }

    console.log("[+] SharedPreferences hooks (no overload) installed.");
});

