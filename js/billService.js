app.service('billService', function($http, $q) {

	//grab sponsored bills for a given bioguide_id
	this.billSearch = function(repId) {
		var deferred = $q.defer();
		$http.get('https://congress.api.sunlightfoundation.com/bills?sponsor_id=' + repId + '&order=last_action_at&apikey=dac579d765324189876e07b53a5815ce')
		.then(function(response) {
			var data = response.data.results;
			deferred.resolve(data)
		})
		return deferred.promise;
	}
})