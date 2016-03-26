import './header.less'

export default  {
  templateUrl: require('./header.html'),
  bindings: {},
  controller($location, githubService, musicService, ngAudio) {
    'ngInject';

    const vm = this;

    vm.$onInit = () => {
      githubService.getConfig().then(res => {
        vm.config = res.data
      });
      githubService.getIndex().then(res => {
        vm.posts = res.data.paginator
      });
      musicService.get(1).success(res => {
        vm.musics = res.songs;
      });
    };

    vm.play = (music) => {
      ngAudio.play(music.url);
    };

    vm.clearSearch = () => {
      delete vm.searchText;
    };

    vm.randomPost = () => {
      const post = vm.posts[Math.floor(Math.random() * vm.posts.length)];
      $location.path(`note/${post.category}${post.url}`)
    };
  }
}