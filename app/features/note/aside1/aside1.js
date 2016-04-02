import './aside1.less'

export default {
  templateUrl: require('./aside1.html'),
  bindings: {
    selectedNav: '<',
    categories: '<?'
  },
  controller(configService) {
    "ngInject";

    const vm = this;
    vm.$onInit = () => {

      const categories = vm.categories
        .map(category => category.name)
        .map(name => {
          return {id: name, name: name, href: `/note/${name}`}
        });

      const pages = ['zhihu', 'tags', 'archive', 'about']
        .map(item => {
          return {id: item, name: configService.config.locals[item], href: `/pages/${item}`}
        });

      vm.navItems = pages.concat(categories);
      console.info('categories & pages:', vm.navItems);

      vm.email = configService.config.author.email;
      vm.rssUrl = configService.api('rss');
    }
  }
}