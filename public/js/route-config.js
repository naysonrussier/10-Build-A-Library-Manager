
(function() {
  'use strict';

  // The Angular $routeProvider is used to configure routes for this application.
  
  angular
    .module('app')
    .config(config);

  function config($routeProvider) {
    $routeProvider
	  .when('/', {
		title: 'home',
		templateUrl: 'home'
	  })
      .when('/books', {
		title: 'Books List',
        controller: 'books',
        templateUrl: 'books_list'
      })
      .when('/books/new', {
		title: 'New Book',
        controller: 'books',
        templateUrl: 'books_new'
      })
      .when('/books/:id', {
		title: 'Book Details',
        controller: 'books',
        templateUrl: 'books_detail'
      })
      .when('/loans', {
		title: 'Loans List',
        controller: 'loans',
        templateUrl: 'loans_list'
      })
      .when('/loans/new', {
		title: 'New Loan',
        controller: 'loans',
        templateUrl: 'loans_new'
      })
      .when('/loans/return', {
		title: 'Return Book',
        controller: 'loans',
        templateUrl: 'loans_return'
      })
      .when('/patrons', {
		title: 'Patrons List',
        controller: 'patrons',
        templateUrl: 'patrons_list'
      })
      .when('/patrons/new', {
		title: 'New Patron',
        controller: 'patrons',
        templateUrl: 'patrons_new'
      })
      .when('/patrons/:id', {
		title: 'Patron Details',
        controller: 'patrons',
        templateUrl: 'patrons_detail'
      })
  }
})();
