angular.module('waterfall')
  .directive('contenteditable', function () {
    return {
      restrict: 'A', // only activate on element attribute
      require: '?ngModel', // get a hold of NgModelController
      link: function (scope, element, attrs, ngModel) {
        if (!ngModel) return; // do nothing if no ng-model

        // Specify how UI should be updated
        ngModel.$render = function () {
          if (ngModel.$viewValue) {
            element.removeClass('has-placeholder');
            element.html(ngModel.$viewValue);
          } else {
            element.addClass('has-placeholder');
            element.html(attrs.placeholder);
          }
        };

        // Listen for change events to enable binding
        element.on('blur', function () {
          if (!element.hasClass('has-placeholder')) {
            scope.$apply(read);
          } else {
            if (!element.html()) {
              scope.$apply(read);
            }
          }
        });

        element.on('keyup change', function () {
          scope.$apply(read);
        });

        element.on('focus', function () {
          if (element.hasClass('has-placeholder')) {
            element.html('');
          }
        });

        // Write data to the model
        function read() {
          var html = element.html();
          // When we clear the content editable the browser leaves a <br> behind
          // If strip-br attribute is provided then we strip this out
          if (attrs.stripBr && html == '<br>') {
            html = '';
          }
          ngModel.$setViewValue(html);
          ngModel.$render();
        }
      }
    };
  });