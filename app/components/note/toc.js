angular.module('app')
  .directive('tableOfContents', function ($location, $anchorScroll) {
    return {
      require: '?ngModel',
      scope: true,
      bindToController: {
        tocHtml: '='
      },
      controller: function () {
        console.info('$scope.tocHtml', this.tocHtml);
      },
      controllerAs: 'toc',
      link: function (scope, elm, attrs) {
        console.info('$scope:', scope);
        console.info('$scope.toc:', scope.toc);
        console.info('tocHtml:', scope.toc.tocHtml);
        function updateHeadlines() {
          scope.headlines = [];
          angular.forEach(elm[0].querySelectorAll('h1,h2,h3,h4,h5,h6'), function (e) {
            scope.headlines.push({
              level: e.tagName[1],
              label: angular.element(e).text(),
              element: e
            });
          });
          console.info('headlines', scope.headlines);
        }

        // avoid memoryleaks from dom references
        scope.$on('$destroy', function () {
          scope.headlines = [];
        });
        // scroll to one of the headlines
        scope.scrollTo = function (headline) {
          console.info('selectedHeadline', headline.element.id);
          //headline.element.scrollIntoView();

          $location.hash(headline.element.id);

          // call $anchorScroll()
          $anchorScroll();
        };
        // when the html updates whe update the headlines
        //ngModel.$render = updateHeadlines;
        updateHeadlines();
      }
    }
  });