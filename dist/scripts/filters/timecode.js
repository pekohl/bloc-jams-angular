(function() {
    /**
  *@function timecode
  *@desc takes song in total seconds and converts time of song into minutes and seconds
  @return output in readbale minutes and seconds
  */
     function timecode() {
         return function(seconds) {
             var seconds = Number.parseFloat(seconds);

             if (Number.isNaN(seconds)) {
                return '-:--';
            }
             var wholeSeconds = Math.floor(seconds);
             var minutes = Math.floor(wholeSeconds / 60);
             var remainingSeconds = wholeSeconds % 60;

             var output = minutes + ':';

             if (remainingSeconds < 10) {
                 output += '0';
             }

             output += remainingSeconds;

             return output;
         };
     }

     angular
         .module('ngBlocJams')
         .filter('timecode', timecode);
 })();
