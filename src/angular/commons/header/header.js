import './header.less'
import 'avatar.jpg'

import Firebase from 'firebase'

export default  {
  templateUrl: require('./header.html'),
  bindings: {},
  controller($location, githubService) {
    'ngInject';

    const vm = this;

    vm.$onInit = () => {
      githubService.getIndex().then(res => {
        vm.posts = res.data.paginator;
      });
    };

    vm.login = () => {
      var ref = new Firebase("https://nobackend-website.firebaseio.com");

      if (ref.getAuth()) {
        ref.unauth();
        vm.hasLogin = false;
        console.log("Logout!");
        return;
      }
      ref.authWithOAuthPopup("github", (error, authData) => {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          vm.hasLogin = true;
          vm.name = authData.github.displayName;
          console.log("Authenticated successfully with payload:", authData);
        }
      });
    }

    vm.clearSearch = () => {
      delete vm.searchText;
    };

    vm.randomPost = () => {
      const post = vm.posts[Math.floor(Math.random() * vm.posts.length)];
      $location.path(`note/${post.category}${post.url}`)
    };
  }
}