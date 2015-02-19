'use strict';

/**
 * @ngdoc overview
 * @name tempApp
 * @description
 * # tempApp
 *
 * Main module of the application.
 */
angular
    .module('App', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(
        function ($routeProvider,$locationProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                .when('/login', {
                  templateUrl: 'views/login.html',
                  controller: 'LoginCtrl'
                })
                .when('/admin', {
                  templateUrl: 'views/admin.html',
                  controller: 'AdminCtrl'
                })
                .when('/icons', {
                  templateUrl: 'views/icons.html',
                  controller: 'iconsCtrl'
                })
                .when('/editpage', {
                  templateUrl: 'views/editpage.html',
                  controller: 'EditpageCtrl'
                })
                .when('/:name', {
                    templateUrl: 'views/basic_content.html',
                    controller: 'BasicContentCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });

        // use the HTML5 History API
        $locationProvider.html5Mode(false);
    });
                    //controller: function (urlattr) {
                    //    console.log(urlattr.name +'Ctrl');
                    //    return urlattr.name +'Ctrl';
                    //}
