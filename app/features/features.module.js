import Apps from './apps/apps'
import Note from './note/note.module'

export default angular.module('app.features', [
  Apps.name,
  Note.name
]);