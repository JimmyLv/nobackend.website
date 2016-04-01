import config from 'json!yaml!../../_config.yml';


class ConfigService {
  constructor() {
  }

  get config() {
    return config;
  }

  api(name) {
    return config.api.github.base + config.api.github[name];
  }

  service(name) {
    return config.api.service[name];
  }
}

export default ConfigService;