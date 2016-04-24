import aside1 from './aside1/aside1'
import aside2 from './aside2/aside2'
import aside3 from './aside3/aside3'
import home from './home/home'
import toggleButton from './toggleButton/toggleButton'
import books from './books/books'
import postItem from './postItem/postItem'
import post from './post/post'
import page from './page/page'
import note from './note'

export default angular.module('app.note', [])
  .component('aside1', aside1)
  .component('aside2', aside2)
  .component('aside3', aside3)
  .component('home', home)
  .component('toggleButton', toggleButton)
  .component('books', books)
  .component('postItem', postItem)
  .component('post', post)
  .component('page', page)
  .component('note', note);