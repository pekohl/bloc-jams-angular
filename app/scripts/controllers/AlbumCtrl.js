(function() {
     function AlbumCtrl() {
        this.albumData = angular.copy(albumPicasso)
     }

     angular
         .module('ngBlocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();
