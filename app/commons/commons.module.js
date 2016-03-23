import Services from '../services/services.module'

import Footer from './footer'
import Header from './header'

export default angular.module('app.commons', [Services.name])
  .component('footer', Footer)
  .component('appHeader', Header);