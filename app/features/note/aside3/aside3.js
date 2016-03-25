import './aside3.less'

export default {
  templateUrl: require('./aside3.html'),
  bindings: {
    config: '<',
    posts: '<',
    selectedCategory: '<',
    tagsWithPosts: '<',
    newestPosts: '<',
    postContent: '<',
    showToc: '<',
    showNav: '<'
  },
  controller($routeParams) {
    "ngInject";

    const vm = this;

    vm.$onInit = () => {
      vm.isIndex = vm.postContent ? false : true;
      vm.selectedCategory = $routeParams.category || '编程';

      vm.disqusConfig = {
        disqus_shortname: 'nobackend-website',
        disqus_identifier: 'nobackend-website',
        disqus_url: 'http://nobackend.website'
      };
    }
  }
}