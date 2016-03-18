class MainCtrl {
  constructor($location, githubService) {
    'ngInject';

    this.$location = $location;
    githubService.getConfig().then(res =>
      this.config = res.data
    );
    githubService.getIndex().then(res =>
      this.posts = res.data.paginator
    );
  }

  clearSearch() {
    delete this.searchText;
  }

  randomPost() {
    var post = this.posts[Math.floor(Math.random() * this.posts.length)];
    this.$location.path('note/' + post.category + post.url)
  }
}

export default MainCtrl;