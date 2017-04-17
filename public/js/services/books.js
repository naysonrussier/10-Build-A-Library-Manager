
(function() {
  'use strict';

/*
	This file provides the necessary code to fetch books data
*/
  
	angular.module('app')
	.service("DSBooks", function($http) {
	  
	  this.getBooks = function(success, error) {
		$http.get('/api/books/list')
		.then(success)
		.catch(error)
	  };
	  
	  this.getBooksSearch = function(search, success, error) {
		$http.get('/api/search/books/?search=' + search)
		.then(success)
		.catch(error)
	  };
	  
	  this.getBooksById = function(id, success, error) {
		$http.get('/api/books/' + id)
		.then(success)
		.catch(error)
	  };
	  this.postBook = function(data, success, error) {
		$http.post('/api/books/new', data)
		.then(success)
		.catch(error)
	  };
	  
	  this.updateBook = function(data, success, error) {
		$http.put('/api/books/', data)
		.then(success)
		.catch(error)
	  };
	  
	});
})();