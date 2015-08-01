app.directive('repCommittees', function() {
	return {
		scope: {
			committees: '='
		},
		templateUrl: './js/directives/committeesTmpl.html'
	}
})