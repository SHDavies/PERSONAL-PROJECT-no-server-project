app.controller('nameController', function($scope, polService, committeeService) {

	$scope.nameSearch = function() {
		polService.nameSearch($scope.nameSearchBox)
		.then(function(data) {
			$scope.representatives = data;
		})
		$scope.nameSearchBox = '';
	};

	$scope.committeeSearch = function(repId) {
		committeeService.committeeSearch(repId)
		.then(function(data) {
			$scope.committees = data;
		})
	}
})