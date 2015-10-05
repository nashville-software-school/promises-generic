define(function(require) {
  var _ = require("lodash");
  var $ = require("jquery");
  var q = require("q");

          return {
            loadBooks: function () {
            var deferred = q.defer();

            $.ajax({
              url:"https://nss-book-store.firebaseio.com/books.json"})
                .done(function(books){
                deferred.resolve(books);
                console.log(books);
                })
                .fail(function(xhr, status, error){
                  deferred.reject(error);
                });

               return deferred.promise;

               }
  };
});
