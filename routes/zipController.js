app.controller('zipController', function($scope, polService, committeeService) {
	$scope.zipSearch = function() {
		polService.zipSearch($scope.zipSearchBox)
		.then(function(data) {
			$scope.representatives = data;
		})
		$scope.zipSearchBox = '';
	};
})