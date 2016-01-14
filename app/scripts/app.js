//var myAppModule = angular.module('ngBlocJams', ['ui.router']);
//
//myAppModule.config(function($stateProvider, $locationProvider) {
//    $locationProvider.html5Mode({
//        enabled: true,
//        requireBase: false
//    });
//
//    $stateProvider
//        .state('landing', {
//            url: '/',
//            //controller: 'LandingController',
//            templateUrl: '/templates/landing.html'
//        })
//        .state('collection', {
//            url: '/collection',
//            //controller: 'CollectionController',
//            templateUrl: '/templates/collection.html'
//        })
//        .state('album', {
//            url: '/album',
//            //controller: 'AlbumController',
//            templateUrl: '/templates/album.html'
//        });
//
//});

 (function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         $stateProvider
         .state('landing', {
             url: '/',
             controller: 'LandingCtrl as landing',
             templateUrl: '/templates/landing.html'
         })
         .state('album', {
             url: '/album',
             controller: 'AlbumCtrl as album',
             templateUrl: '/templates/album.html'
         })
         .state('collection', {
             url: '/collection',
             controller: 'CollectionCtrl as collection',
             templateUrl: '/templates/collection.html'
         });
     }
    angular
        .module('ngBlocJams', ['ui.router'])
        .config(config);
 })();
