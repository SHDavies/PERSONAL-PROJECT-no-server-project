angular.module('polApp').service('polService', function($http, $q) {
	this.zipSearch = function(zipCode) {
		var deferred = $q.defer();
		$http.get('http://congress.api.sunlightfoundation.com/legislators/locate?zip=' + zipCode + '&apikey=dac579d765324189876e07b53a5815ce')
		.then(function(response) {
			var data = response.data.results;
			deferred.resolve(data);
		})

		return deferred.promise;
	}

	this.nameSearch = function(name) {
		var deferred = $q.defer();
		$http.get('http://congress.api.sunlightfoundation.com/legislators?query=' + name + '&apikey=dac579d765324189876e07b53a5815ce')
		.then(function(response) {
			var data = response.data.results;
			deferred.resolve(data);
		})

		return deferred.promise;
	}
})