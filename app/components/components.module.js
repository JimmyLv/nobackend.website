import Apps from './apps/apps'
import Posts from './jekyll/posts'
import Note from './note/note.module'

export default angular.module('app.components', [
  Apps.name,
  Posts.name,
  Note.name
]);