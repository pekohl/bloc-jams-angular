(function() {
     function AlbumCtrl(Fixtures) {
        this.albumData = Fixtures.getAlbum();
     }

     angular
         .module('ngBlocJams')
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
 })();
