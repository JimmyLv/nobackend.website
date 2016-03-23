import Footer from './footer'
import Header from './header'

export default angular.module('app.commons', [])
  .component('appFooter', Footer)
  .component('appHeader', Header);