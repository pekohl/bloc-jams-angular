(function() {
     function CollectionCtrl(Fixtures) {
         this.albums = Fixtures.getCollection(12);
     };

     angular
         .module('ngBlocJams')
         .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
 })();
