
(function() {
  'use strict';

/*
	This file provides the necessary code to fetch patrons data
*/
  
	angular.module('app')
	.service("DSPatrons", function($http) {
	  
	  this.getPatrons = function(success, error) {
		$http.get('/api/patrons/list')
		.then(success)
		.catch(error)
	  };
	    
	  this.getPatronsSearch = function(search, success, error) {
		$http.get('/api/search/patrons/?search=' + search)
		.then(success)
		.catch(error)
	  };
	  
	  this.getPatronsById = function(id, success, error) {
		$http.get('/api/patrons/' + id)
		.then(success)
		.catch(error)
	  };
	  
	  this.getLoans_overdue = function(success, error) {
		$http.get('/api/loans/overdue')
		.then(success)
		.catch(error)
	  };
	  
	  this.postPatrons = function(data, success, error) {
		$http.post('/api/patrons/new', data)
		.then(success)
		.catch(error)
	  };
	  
	  this.updatePatron = function(data, success, error) {
		$http.put('/api/patrons/', data)
		.then(success)
		.catch(error)
	  };
	  
	});
})();