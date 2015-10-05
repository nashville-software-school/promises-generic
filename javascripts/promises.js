requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});

requirejs(
  ["jquery", "hbs", "bootstrap", "get-books", "xhr1", "q"],
  function($, Handlebars, bootstrap, books, x1, q) {
    var allBooks;
       books.loadBooks()
        .then(function(books){
          books = Object.keys( books ).map(key => books[ key ]);
          allBooks = books;
       return x1.bookType();
     }).then(function(types) {
       types = Object.keys( types ).map(key => types[ key ]);
      var bookArray = allBooks.map(book => {
        book.type = _.find(types, { id:book.booktype }).label;
        return book;
      });
      require(['hbs!../templates/books'], function(bookTpl) {
        $("#bookList").html(bookTpl({books:bookArray}));
      });
    });
  });
