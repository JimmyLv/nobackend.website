import config from 'json!yaml!../../_config.yml';


class ConfigService {
  constructor() {
  }

  get config() {
    return config;
  }
}

export default ConfigService;