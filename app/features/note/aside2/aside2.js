import './aside2.less'

export default {
  templateUrl: require('./aside2.html'),
  bindings: {
    posts: '<',
    selectedNav: '<'
  },
  controller($location) {
    "ngInject";

    const vm = this;
    vm.$onInit = () => {
      console.info('posts: ', vm.posts);

      vm.selectedLinkOfPost = $location.url() + '/';

      if (vm.selectedNav === 'zhihu') {
        vm.items = vm.posts.map((question)=> {
          return {
            title: `${question.title} |  ${question.agree} 赞`,
            link: `/pages/zhihu${question.link}`
          }
        })
      } else {
        vm.items = vm.posts.map((post) => {
          return {
            title: post.title,
            link: `/note/${encodeURIComponent(post.category)}${post.url}`
          }
        });
      }
    }
  }
}