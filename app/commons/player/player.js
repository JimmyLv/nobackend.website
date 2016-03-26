import './player.less'
import sample from 'lodash/sample'
import without from 'lodash/without'

export default  {
  templateUrl: require('./player.html'),
  bindings: {
    musicId: '<'
  },
  controller(musicService, ngAudio) {
    'ngInject';

    const vm = this;

    var selectedMusic;
    const _random = (playList) => {
      if (vm.audio) {
        vm.audio.pause();
        vm.audio.unbind()
      }
      selectedMusic = sample(without(playList, selectedMusic));
      vm.selectedMusicName = `${selectedMusic.name} - ${selectedMusic.artists}`;
      vm.audio = ngAudio.load(selectedMusic.url);
      vm.audio.play();
      return vm.audio;
    };

    vm.$onInit = () => {
      vm.showName = false;

      musicService.getPlayList('309097660').success(res => {
        vm.musics = res.songs;
        vm.shuffle();
      });

      vm.shuffle = () => {
        return _random(vm.musics)
          .complete(_random(vm.musics))
          .complete(_random(vm.musics))
          .complete(_random(vm.musics));
      };
    }
  }
}