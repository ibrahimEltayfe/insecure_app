import 'package:encrypt/encrypt.dart';

class AESEncryption {
  final String _key = '1jskalfobm402@d)cmalgoni';
  final String _iv = '1onm4kflai5#21kflovma02j';

  String encrypt(String text) {
    final encrypter = Encrypter(AES(
      Key.fromBase64(_key),
      mode: AESMode.cbc,
    ));

    return encrypter.encrypt(text, iv: IV.fromBase64(_iv)).base64;
  }

  String decrypt(String text) {
    final encrypter = Encrypter(AES(
      Key.fromBase64(_key),
      mode: AESMode.cbc,
    ));

    return encrypter.decrypt(Encrypted.from64(text), iv: IV.fromBase64(_iv));
  }
}