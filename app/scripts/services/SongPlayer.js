(function() {
     function SongPlayer(Fixtures) {
        var SongPlayer = {};
           /**
             * @desc Current Album public obj
             * @type {Object}
            */
        var currentAlbum = Fixtures.getAlbum();
            /**
             * @desc Buzz object audio file
             * @type {Object}
            */
        var currentBuzzObject = null;

            /**
             * @function setSong
             * @desc Stops currently playing song and loads new audio file as currentBuzzObject
             * @param {Object} song
             */
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            SongPlayer.currentSong = song;
            };

            /* *
              * @function playSong
              * @desc Plays passed in song object
              * @param {Object} song
            */
            function playSong(song){
                if (currentBuzzObject){
                  currentBuzzObject.play();
                  song.playing = true;
                }
            };
            /* *
              * @function getSongIndex
              * @desc gets the index of songs on the current album
              * @param {Object} song
            */
        var getSongIndex = function(song){
            return currentAlbum.songs.indexOf(song);
        };

        /**
        * @function stopSong
        * @desc Stop a song
        * @param {Object} song
        */
        var stopSong = function(song) {
            currentBuzzObject.stop();
            song.playing = null;
        };

        /**
        * @desc current song
        * @type {Object}
        */
        SongPlayer.currentSong = null;

            /* *
             * @function SongPlayer.play
             * @desc Method to start playing song
             * @param {Object} song
            */
            SongPlayer.play = function(song) {
                song = song || SongPlayer.currentSong;
                if (SongPlayer.currentSong !== song) {
                    setSong(song);
                    playSong(song);
                    } else if (SongPlayer.currentSong === song) {
                        if (currentBuzzObject.isPaused()) {
                        playSong(song);
                        }
                    }
                };

            SongPlayer.pause = function(song) {
                song = song || SongPlayer.currentSong;
                 currentBuzzObject.pause();
                 song.playing = false;
                };

             /**
             * @function SongPlayer.previous
             * @desc Method to playe the previous song
             * @param {Object} song
             */
            SongPlayer.previous = function(){
                var currentSongIndex = getSongIndex(SongPlayer.currentSong);
                currentSongIndex--;

                if (currentSongIndex < 0) {
                    stopSong(SongPlayer.currentSong);
                } else {
                    var song = currentAlbum.songs[currentSongIndex];
                    setSong(song);
                    playSong(song);
                }
            };
          /**
             * @function SongPlayer.next
             * @desc Method to play the next song
             * @param {Object} song
             */
            SongPlayer.next = function(){
                var currentSongIndex = getSongIndex(SongPlayer.currentSong);
                currentSongIndex++;

                var lastSongIndex = currentAlbum.songs.length - 1;

                if (currentSongIndex > lastSongIndex) {
                    stopSong(SongPlayer.currentSong);

                } else {
                    var song = currentAlbum.songs[currentSongIndex];
                    setSong(song);
                    playSong(song);
                }
            };



        return SongPlayer;
     }

     angular
         .module('ngBlocJams')
         .factory('SongPlayer', SongPlayer);
 })();
