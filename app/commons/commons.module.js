import Footer from './footer/footer'
import Header from './header/header'
import Music from './music/music'

export default angular.module('app.commons', [])
  .component('appFooter', Footer)
  .component('appHeader', Header)
  .component('musicBox', Music);