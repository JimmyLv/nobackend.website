import '../../../node_modules/font-awesome-animation/dist/font-awesome-animation.css'
import '../../../node_modules/font-awesome/css/font-awesome.css'

import 'bootstrap.css'
import 'yue.css'
import 'base.less'

import Apps from './apps/apps'
import Note from './note/note.module.js'

export default angular.module('app.features', [
  Apps.name,
  Note.name
]);