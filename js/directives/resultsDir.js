app.directive('resultsDir', function() {
	return {
		restrict: 'E',
		templateUrl: './js/directives/resultsTmpl.html',
		scope: {
			search: '=',
			rep: '='
		},
		link: function(scope, element, attrs) {
			element.on('click', function() {
				scope.search(scope.rep.bioguide_id);
			})
		}
	}
})