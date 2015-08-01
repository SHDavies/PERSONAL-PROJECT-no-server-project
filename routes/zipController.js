app.controller('zipController', function($scope, polService, committeeService) {
	$scope.zipSearch = function() {
		polService.zipSearch($scope.zipSearchBox)
		.then(function(data) {
			$scope.representatives = data;
		})
		$scope.zipSearchBox = '';
	};

	$scope.committeeSearch = function(repId) {
		return committeeService.committeeSearch(repId);
	};
})