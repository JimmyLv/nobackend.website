import '../../assets/styles/font-awesome.css'
import '../../assets/styles/bootstrap.css'
import '../../assets/styles/yue.css'
import '../../assets/styles/base.less'

import Apps from './apps/apps'
import Note from './note/note.module'

export default angular.module('app.features', [
  Apps.name,
  Note.name
]);