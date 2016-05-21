import './header.less'
import 'avatar.jpg'

import firebase from 'firebase'

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
      var config = {
        apiKey: "AIzaSyC5ggKO2ibCmop9G6eyelf5hAgG4L1pqDk",
        authDomain: "nobackend-website.firebaseapp.com",
        databaseURL: "https://nobackend-website.firebaseio.com",
        storageBucket: "nobackend-website.appspot.com"
      };
      firebase.initializeApp(config);
      var provider = new firebase.auth.GithubAuthProvider();
      provider.addScope('user');

      if (vm.hasLogin) {
        firebase.auth().signOut().then(function () {
          vm.hasLogin = false;
          console.log("Logout successful!");
        })
        return;
      }

      firebase.auth().signInWithPopup(provider).then(function (result) {
        const user = result.user.providerData[0];
        vm.hasLogin = true;
        vm.name = user.displayName;
        console.log("Authenticated successfully with user:", user);
      }).catch(function (error) {
        console.log("Login Failed!", error);
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