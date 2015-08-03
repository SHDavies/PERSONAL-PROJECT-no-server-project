app.directive('repBills', function() {
	return {
		scope: {
			bills: '='
		},
		templateUrl: './js/directives/billsTmpl.html'
	}
})