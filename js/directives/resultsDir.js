app.directive('resultsDir', function() {
	return {
		restrict: 'E',
		templateUrl: './js/directives/resultsTmpl.html',
		scope: {
			search: '=',
			rep: '=',
			showCommittee: '=',
			committees: '=',
			bills: '=',
			billSearch: '='
		},
		link: function(scope, element, attrs) {
			element.css({cursor: 'pointer'})

			//when clicked, runs committee search and bill search functions, feeds data to children directives and shows those directives
			element.on('click', function() {
				scope.search(scope.rep.bioguide_id)
				.then(function(data) {
					scope.committees = data;
				})
				scope.billSearch(scope.rep.bioguide_id)
				.then(function(data) {
					scope.bills = data;
					scope.showCommittee = !scope.showCommittee;
				})
			})
		}
	}
})