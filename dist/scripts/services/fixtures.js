// // Example Album
//var albumPicasso = {
//     name: 'The Colors',
//     artist: 'Pablo Picasso',
//     label: 'Cubism',
//     year: '1881',
//     albumArtUrl: 'assets/images/album_covers/03.png',
//     songs: [
//         { name: 'Blue', length: '4:26' },
//         { name: 'Green', length: '3:14' },
//         { name: 'Red', length: '5:01' },
//         { name: 'Pink', length: '3:21'},
//         { name: 'Magenta', length: '2:15'}
//     ]
// };
//
// // Another Example Album
//var albumMarconi = {
//     name: 'The Telephone',
//     artist: 'Guglielmo Marconi',
//     label: 'EM',
//     year: '1909',
//     albumArtUrl: 'assets/images/album_covers/20.png',
//     songs: [
//         { name: 'Hello, Operator?', length: '1:01' },
//         { name: 'Ring, ring, ring', length: '5:01' },
//         { name: 'Fits in your pocket', length: '3:21'},
//         { name: 'Can you hear me now?', length: '3:14' },
//         { name: 'Wrong phone number', length: '2:15'}
//     ]
// };
//
//// Another Example Album
//var albumBJoel = {
//     name: 'Uptown Girl',
//     artist: 'Billy Joel',
//     label: 'Blue Note',
//     year: '1987',
//     albumArtUrl: 'assets/images/album_covers/18.png',
//     songs: [
//         { name: 'Dancing on the ceiling', length: '3:21' },
//         { name: 'Uptown Girl', length: '4:28' },
//         { name: 'Middle of the night', length: '3:42'},
//         { name: 'Piano Man', length: '2:56' },
//         { name: 'Red Red Wine', length: '3:15'}
//     ]
// };

(function() {
     function Fixtures() {
         var Fixtures = {};

            var albumPicasso = {
             name: 'The Colors',
             artist: 'Pablo Picasso',
             label: 'Cubism',
             year: '1881',
             albumArtUrl: '/assets/images/album_covers/01.png',
             songs: [
                 { name: 'Blue', length: '161.71', audioUrl: '/assets/music/blue' },
                 { name: 'Green', length: '103.96', audioUrl: '/assets/music/green' },
                 { name: 'Red', length: '268.45', audioUrl: '/assets/music/red' },
                 { name: 'Pink', length: '153.14', audioUrl: '/assets/music/pink' },
                 { name: 'Magenta', length: '374.22', audioUrl: '/assets/music/magenta' }
             ]
            };

             var albumMarconi = {
                 name: 'The Telephone',
                 artist: 'Guglielmo Marconi',
                 label: 'EM',
                 year: '1909',
                 albumArtUrl: '/assets/images/album_covers/20.png',
                 songs: [
                     { name: 'Hello, Operator?', length: '1:01' },
                     { name: 'Ring, ring, ring', length: '5:01' },
                     { name: 'Fits in your pocket', length: '3:21' },
                     { name: 'Can you hear me now?', length: '3:14' },
                     { name: 'Wrong phone number', length: '2:15' }
                 ]
                };

            var albumBJoel = {
             name: 'Uptown Girl',
             artist: 'Billy Joel',
             label: 'Blue Note',
             year: '1987',
             albumArtUrl: 'assets/images/album_covers/18.png',
             songs: [
                 { name: 'Dancing on the ceiling', length: '3:21' },
                 { name: 'Uptown Girl', length: '4:28' },
                 { name: 'Middle of the night', length: '3:42'},
                 { name: 'Piano Man', length: '2:56' },
                 { name: 'Red Red Wine', length: '3:15'}
             ]
                };

         Fixtures.getAlbum = function() {
         return albumPicasso;
     };
        return Fixtures;
     }

     angular
         .module('ngBlocJams')
         .factory('Fixtures', Fixtures);
 })();
