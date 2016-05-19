import './toc.less'

export default function ($anchorScroll) {
  'ngInject';

  return {
    require: '?ngModel',
    scope: true,
    controller: function () {
      this.headlines = [];
      this.showEnglish = true;
      this.scrollTo = function (headline) {
        console.info('selectedHeadline:', headline.element.id);
        var content = angular.element(document.querySelector('#container'));

        content.removeClass('offset-fixed');
        $anchorScroll(headline.element.id);
        content.addClass('offset-fixed');
      };
      this.toggleEnglish = function () {
        this.showEnglish = !this.showEnglish;
        var englishContent = angular.element(document.querySelectorAll('blockquote'));
        if (this.showEnglish) {
          englishContent.removeClass('english-hidden');
        } else {
          englishContent.addClass('english-hidden');
        }
      }
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
    }
  }
}