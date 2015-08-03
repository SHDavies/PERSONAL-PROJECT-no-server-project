app.controller('zipController', function($scope, polService, committeeService, billService) {
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

	$scope.billSearch = function(repId) {
		return billService.billSearch(repId);
	};
})