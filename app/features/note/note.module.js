import aside1 from './aside1/aside1'
import aside2 from './aside2/aside2'
import aside3 from './aside3/aside3'
import books from './books/books'
import postItem from './postItem/postItem'
import page from './page/page'
import post from './post/post'
import note from './note'

export default angular.module('app.note', [])
  .component('aside1', aside1)
  .component('aside2', aside2)
  .component('aside3', aside3)
  .component('books', books)
  .component('post', post)
  .component('postItem', postItem)
  .component('page', page)
  .component('note', note)
