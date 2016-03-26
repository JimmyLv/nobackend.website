import './header.less'
import sample from 'lodash/sample'
import without from 'lodash/without'

export default  {
  templateUrl: require('./header.html'),
  bindings: {},
  controller($location, githubService, musicService, ngAudio) {
    'ngInject';

    const vm = this;
    const _random = (playList) => {
      if (vm.audio) {
        vm.audio.pause();
        vm.audio.unbind()
      }
      vm.selectedMusic = sample(playList);
      vm.audio = ngAudio.load(vm.selectedMusic.url);
      vm.audio.play();
      return vm.audio;
    };

    vm.$onInit = () => {
      githubService.getConfig().then(res => {
        vm.config = res.data
      });
      githubService.getIndex().then(res => {
        vm.posts = res.data.paginator
      });
      musicService.getPlayList('309097660').success(res => {
        vm.musics = res.songs;
        vm.shuffle().complete(()=> {
          !vm.audio.paused || _random(vm.musics);
        });
      });
    };

    vm.shuffle = () => {
      return _random(without(vm.musics, vm.selectedMusic));
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