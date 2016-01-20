(function() {
     function SongPlayer() {
        var SongPlayer = {};

        var currentSong = null;
        var currentBuzzObject = null;

        SongPlayer.play = function(song) {
            if (currentSong !== song) {
                if (currentBuzzObject) {
                    currentBuzzObject.stop();
                } else if (currentSong === song) {
                    if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                    }
                }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
             formats: ['mp3'],
             preload: true
                });

            currentSong = song;

            currentBuzzObject.play();
            }
        };

        return SongPlayer;
     }

     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();
