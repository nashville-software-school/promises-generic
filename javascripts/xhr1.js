define(function(require) {
  var $ = require("jquery");
  var q = require("q");


  return {
    bookType: function () {
    var deferred = q.defer();
    console.log("Entered x1");

    $.ajax({
      url: "https://nss-book-store.firebaseio.com/booktypes.json"
    })
    .done(function(types) {
      deferred.resolve(types);
      console.log("Ajax2-Types= ",types);
    })
    .fail(function(xhr, status, error){
      deferred.reject(error);
    });
    console.log("Ajax Call Types Promise Returned = ",deferred.promise);
    return deferred.promise;

    }
  };
});
