"use strict";

var app = angular.module('app', ['ngRoute', "LocalStorageModule"])
.constant('FirebaseURL', "https://group-project-somepinterestpun.firebaseio.com/");

app.config(function($routeProvider) {

    $routeProvider.
        when('/', {
        	templateUrl: 'partials/splash.html',
        	controller: 'NavCtrl'
        }).
        when('/profile', {
            templateUrl: 'partials/profile.html',
            controller: 'ProfileCtrl'
        }).
        when('/board/:id', {
            templateUrl: 'partials/board.html',
            controller: 'BoardCtrl'
        }).
         when('/pin', {
            templateUrl: 'partials/pin.html',
            controller: 'pinCtrl'
        }).
        otherwise('/profile');
});
