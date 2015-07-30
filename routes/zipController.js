app.controller('zipController', function($scope, polService) {
	$scope.zipSearch = function() {
		polService.zipSearch($scope.zipSearchBox)
		.then(function(data) {
			$scope.representatives = data;
		})
	};
})