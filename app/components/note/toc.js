angular.module('app')
  .directive('tableOfContents', function ($location, $anchorScroll) {
    return {
      require: '?ngModel',
      scope: true,
      controller: function () {
        this.headlines = [];
        this.scrollTo = function (headline) {
          console.info('selectedHeadline', headline.element.id);

          //headline.element.scrollIntoView();
          $location.hash(headline.element.id);

          $anchorScroll();
        };
      },
      controllerAs: 'toc',
      link: function ($scope, $element) {

        $scope.toc.headlines = updateHeadlines($element[0]);

        // avoid memoryleaks from dom references
        $scope.$on('$destroy', function () {
          $scope.toc.headlines = [];
        });

        function updateHeadlines(content) {
          var headlines = [];
          angular.forEach(content.querySelectorAll('h1,h2,h3,h4,h5,h6'), function (e) {
            headlines.push({
              level: e.tagName[1],
              label: angular.element(e).text(),
              element: e
            });
          });
          return headlines;
        }

        console.info('$scope', $scope);
      }
    }
  });