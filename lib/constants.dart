import 'package:envied/envied.dart';

part 'constants.g.dart';

@Envied(path: 'env/.env')
class Constants{

  @EnviedField(obfuscate: true)
  static final String API_KEY = _Constants.API_KEY;
}

