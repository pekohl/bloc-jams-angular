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
             templateUrl: '/templates/landing.html'
         });
         })
         .state('album', {
             url: '/album',
             templateUrl: '/templates/album.html'
         });
     }
    angular
        .module('ngBlocJams', ['ui.router'])
        .config(config);
 })();
