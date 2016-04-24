import './player.less'
import sample from 'lodash/sample'
import without from 'lodash/without'

export default  {
  templateUrl: require('./player.html'),
  bindings: {
    musicId: '<'
  },
  controller(configService, musicService, ngAudio) {
    'ngInject';

    const vm = this;
    var selectedMusic;
    vm.$onInit = () => {
      vm.showName = false;

      musicService.getPlayList(configService.config.meta.songlist).success(res => {
        vm.musics = res.songs;
        vm.shuffle();
      });

      vm.shuffle = () => {
        _random().complete(() => {
          _random().complete(() => {
            _random().complete(() => {
              _random().complete(() => {
                _random().complete(() => {
                  _random().complete(() => {
                    _random()
                  });
                });
              });
            });
          });
        });
      };
    };

    const _random = () => {
      if (vm.audio) {
        vm.audio.pause();
        vm.audio.unbind()
      }
      selectedMusic = sample(without(vm.musics, selectedMusic));
      vm.selectedMusicName = `${selectedMusic.name} - ${selectedMusic.artists}`;
      vm.audio = ngAudio.load(selectedMusic.url);
      vm.audio.play();
      return vm.audio;
    };
  }
}