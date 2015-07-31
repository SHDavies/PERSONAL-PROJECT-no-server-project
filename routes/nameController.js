app.controller('nameController', function($scope, polService, committeeService) {

	$scope.showCommittee = false;

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
			$scope.showCommittee = !$scope.showCommittee;
		})
	}
})