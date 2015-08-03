app.service('committeeService', function($http, $q) {

	//grab committees for a given bioguide_id
	this.committeeSearch = function(repId) {
		var deferred = $q.defer();
		$http.get('https://congress.api.sunlightfoundation.com/committees?member_ids=' + repId + '&apikey=dac579d765324189876e07b53a5815ce')
		.then(function(response) {
			var data = response.data.results;
			deferred.resolve(data);
		})
		return deferred.promise;
	}
})