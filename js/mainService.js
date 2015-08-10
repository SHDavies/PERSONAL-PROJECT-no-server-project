angular.module('polApp').service('polService', function($http, $q) {

	//search legislators by zip
	this.zipSearch = function(zipCode) {
		var deferred = $q.defer();
		$http.get('http://congress.api.sunlightfoundation.com/legislators/locate?zip=' + zipCode + '&apikey=xxxxxx')
		.then(function(response) {
			var data = response.data.results;
			deferred.resolve(data);
		})

		return deferred.promise;
	}

	//search legislators by name
	this.nameSearch = function(name) {
		var deferred = $q.defer();
		$http.get('http://congress.api.sunlightfoundation.com/legislators?query=' + name + '&apikey=dac579d765324189876e07b53a5815ce')
		.then(function(response) {
			console.log(response);
			var data = response.data.results;
			console.log(data);
			deferred.resolve(data);
		})

		return deferred.promise;
	}
})
