import Footer from './footer/footer'
import Header from './header/header'

export default angular.module('app.commons', [])
  .component('appFooter', Footer)
  .component('appHeader', Header);