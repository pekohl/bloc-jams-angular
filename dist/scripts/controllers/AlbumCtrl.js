(function() {
     function AlbumCtrl(Fixtures, SongPlayer)) {
        this.albumData = Fixtures.getAlbum();
        this.songPlayer = SongPlayer;
     }

     angular
         .module('ngBlocJams')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
 })();
