import aside1 from './aside1/aside1'
import aside2 from './aside2/aside2'
import aside3 from './aside3/aside3'
import books from './books/books'
import link from './link/link'
import nest from './nest/nest'
import post from './post/post'
import note from './note'

export default angular.module('app.components.note', [])
  .component('aside1', aside1)
  .component('aside2', aside2)
  .component('aside3', aside3)
  .component('books', books)
  .component('post', post)
  .component('postLink', link)
  .component('nest', nest)
  .component('note', note)
