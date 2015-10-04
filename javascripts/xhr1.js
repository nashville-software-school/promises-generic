define (['jquery', 'q'], function ($, q) {

return {
  bookType: function () {
  var deferred = q.defer();

  $.ajax({
    url: "https://nss-book-store.firebaseio.com/booktypes.json"
  }).done(function(types) {
    deferred.resolve(types);
    console.log(types);
  }).fail(function(xhr, status, error){
    deferred.reject(error);
  });

  return deferred.promise;
  // console.log(deferred.promise);

  }
};

// console.log(bookType);

});
