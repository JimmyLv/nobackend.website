class ConfigService {
  constructor(CONFIG) {
    'ngInject';

    this.configuration = CONFIG;
    console.info('config...', this.configuration)
  }

  get config() {
    return this.configuration;
  }

  api(name) {
    const baseUrl = this.configuration.api.github.base === undefined ? '../' : this.configuration.api.github.base;
    return baseUrl + this.configuration.api.github[name];
  }

  service(name) {
    return this.configuration.api.service[name];
  }
}

export default ConfigService;