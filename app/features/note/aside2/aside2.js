import './aside2.less'

export default {
  templateUrl: require('./aside2.html'),
  bindings: {
    posts: '<',
    selectedNav: '<'
  },
  controller($routeParams) {
    "ngInject";

    const vm = this;
    vm.$onInit = () => {
      console.info('posts: ', vm.posts);

      vm.selectedPost = `/${$routeParams.post}`;

      if (vm.selectedNav === 'zhihu') {
        vm.items = vm.posts.map((question)=> {
          return {
            id: question.link,
            title: question.title,
            link: `pages/zhihu${question.link}`
          }
        })
      } else {
        vm.items = vm.posts.map((post) => {
          return {
            id: post.url,
            title: post.title,
            link: `note/${post.category}${post.url}`
          }
        });
      }
      console.info('selected item:', vm.selectedNav + vm.selectedPost);
    }
  }
}