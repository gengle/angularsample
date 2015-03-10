'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', [])

    // Path: /
    .controller('HomeCtrl', [
        '$scope', '$location', '$window', function($scope, $location, $window) {
            $scope.$root.title = 'AngularJS SPA Template for Visual Studio';
            $scope.$on('$viewContentLoaded', function() {
                $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
            });
        }
    ])

    // Path: /about
    .controller('AboutCtrl', [
        '$scope', '$location', '$window', function($scope, $location, $window) {
            $scope.$root.title = 'AngularJS SPA | About';
            $scope.$on('$viewContentLoaded', function() {
                $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
            });
        }
    ])

    // Path: /login
    .controller('LoginCtrl', [
        '$scope', '$location', '$window', function($scope, $location, $window) {
            $scope.$root.title = 'AngularJS SPA | Sign In';
            // TODO: Authorize a user
            $scope.login = function() {
                $location.path('/');
                return false;
            };
            $scope.$on('$viewContentLoaded', function() {
                $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
            });
        }
    ])

    // Path: /error/404
    .controller('OptionsCtrl', function ($scope, HelloWorldFromService, SelectedOptionService) {
        $scope.test = 'hello';
        $scope.title = HelloWorldFromService.sayHello();
        $scope.setOption = function(e) {
            SelectedOptionService.setOption(e);
        };
        $scope.options = [
            {
                'name': 'Nexus S',
                'snippet': 'Fast just got faster with Nexus S.',
                'number':1
            },
            {
                'name': 'Motorola XOOM™ with Wi-Fi',
                'snippet': 'The Next, Next Generation tablet.',
                'number': 2
            },
            {
                'name': 'MOTOROLA XOOM™',
                'snippet': 'The Next, Next Generation tablet.',
                'number': 3
            }
        ];
    })

    .controller('SelectedOptionCtrl', function ($scope, SelectedOptionService) {
        $scope.getOption = function () {
            return SelectedOptionService.getOption();
        };
    })
        

    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);

