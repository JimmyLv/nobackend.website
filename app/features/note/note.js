import './note.less'
import low from 'lowdb';
import localStorage from 'lowdb/browser';

export default  {
  templateUrl: require('./note.html'),
  bindings: {
    index: '<',
    postContent: '<'
  },
  controller($routeParams, $window, configService) {
    "ngInject";

    const vm = this;

    vm.$onInit = () => {
      var meta = configService.config.meta;
      console.info('rss api:', configService.api('rss'));
      vm.selectedCategory = $routeParams.category || meta.active;

      const db = low('db', {storage: localStorage});
      db.object = vm.index;

      vm.selectedPostsByCategory = db('categories').find({name: vm.selectedCategory}).posts;

      vm.isIndex = vm.postContent ? false : true;
      vm.newestPosts = vm.index.paginator.slice(0, 10);
      vm.selectedTagsWithPosts = db('tags').filter(tag => meta.tags.indexOf(tag.name) > -1);

      vm.showNav = true;
      vm.showToc = false;

      vm.toggleNav = () => {
        vm.showNav = !vm.showNav;
        vm.showToc = !vm.showToc;
      };

      vm.toggleToc = () => {
        if ($routeParams.category === '演讲') {
          $window.open(`${configService.api('slides')}/${$routeParams.post}.htm`, '_blank');
        } else {
          vm.showToc = !vm.showToc;
        }
      };
    };
  }
}
