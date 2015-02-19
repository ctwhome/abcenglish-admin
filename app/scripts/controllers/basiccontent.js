'use strict';

/**
 * @ngdoc function
 * @name stocksApp.controller:BasiccontentCtrl
 * @description
 * # BasiccontentCtrl
 * Controller of the stocksApp
 */
angular.module('stocksApp')
  .controller('BasiccontentCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
