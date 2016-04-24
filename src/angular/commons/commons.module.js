import Footer from './footer/footer'
import Header from './header/header'
import MusicBox from './musicBox/musicBox'
import Player from './player/player'

export default angular.module('app.commons', [])
  .component('appFooter', Footer)
  .component('appHeader', Header)
  .component('musicBox', MusicBox)
  .component('player', Player);