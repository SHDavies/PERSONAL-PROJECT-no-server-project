app.controller('nameController', function($scope, polService) {
	$scope.nameSearch = function() {
		polService.nameSearch($scope.nameSearchBox)
		.then(function(data) {
			$scope.representatives = data;
		})
	};
})