/***
GLobal Directives
***/

// Route State Load Spinner(used on page or content load)
MetronicApp.directive('ngSpinnerBar', ['$rootScope',
    function($rootScope) {
        return {
            link: function(scope, element, attrs) {
                // by defult hide the spinner bar
                element.addClass('hide'); // hide spinner bar by default

                // display the spinner bar whenever the route changes(the content part started loading)
                $rootScope.$on('$stateChangeStart', function() {
                    element.removeClass('hide'); // show spinner bar
                });

                // hide the spinner bar on rounte change success(after the content loaded)
                $rootScope.$on('$stateChangeSuccess', function() {
                    element.addClass('hide'); // hide spinner bar
                    $('body').removeClass('page-on-load'); // remove page loading indicator
                    Layout.setSidebarMenuActiveLink('match'); // activate selected link in the main menu
                    
                    // auto scorll to page top
                    setTimeout(function () {
                        Metronic.scrollTop(); // scroll to the top on content load
                    }, $rootScope.settings.layout.pageAutoScrollOnLoad);     
                });

                // handle errors
                $rootScope.$on('$stateNotFound', function() {
                    element.addClass('hide'); // hide spinner bar
                });

                // handle errors
                $rootScope.$on('$stateChangeError', function() {
                    element.addClass('hide'); // hide spinner bar
                });
            }
        };
    }
])

// Handle global LINK click
MetronicApp.directive('a',
    function() {
        return {
            restrict: 'E',
            link: function(scope, elem, attrs) {
                if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                    elem.on('click', function(e) {
                        e.preventDefault(); // prevent link click for above criteria
                    });
                }
            }
        };
    });

// Handle Dropdown Hover Plugin Integration
MetronicApp.directive('dropdownMenuHover', function () {
  return {
    link: function (scope, elem) {
      elem.dropdownHover();
    }
  };  
});

// CheckAll option in common
/*MetronicApp.directive('selectAllCheckbox', function () {
    return {
        replace: true,
        restrict: 'E',
        scope: {
            checkboxes: '=',
            allselected: '=allSelected',
            allclear: '=allClear'
        },
        template: '<input type="checkbox" ng-model="master" ng-change="masterChange()">',
        controller: function ($scope, $element) {

            $scope.masterChange = function () {
                if ($scope.master) {
                    angular.forEach($scope.checkboxes, function (cb, index) {
                        cb.isSelected = true;
                    });
                } else {
                    angular.forEach($scope.checkboxes, function (cb, index) {
                        cb.isSelected = false;
                    });
                }
            };

            $scope.$watch('checkboxes', function () {
                var allSet = true,
                    allClear = true;
                angular.forEach($scope.checkboxes, function (cb, index) {
                    if (cb.isSelected) {
                        allClear = false;
                    } else {
                        allSet = false;
                    }
                });

                if ($scope.allselected !== undefined) {
                    $scope.allselected = allSet;
                }
                if ($scope.allclear !== undefined) {
                    $scope.allclear = allClear;
                }

                $element.prop('indeterminate', false);
                if (allSet) {
                    $scope.master = true;
                } else if (allClear) {
                    $scope.master = false;
                } else {
                    $scope.master = false;
                    $element.prop('indeterminate', true);
                }

            }, true);
        }
    };
});*/