app.controller('nameController', function($scope, polService, committeeService, billService) {

	$scope.nameSearch = function() {
		polService.nameSearch($scope.nameSearchBox)
		.then(function(data) {
			$scope.representatives = data;
		})
		$scope.nameSearchBox = '';
	};

	$scope.committeeSearch = function(repId) {
		return committeeService.committeeSearch(repId);
	};

	$scope.billSearch = function(repId) {
		return billService.billSearch(repId);
	};
})