var app = angular.module("MyApp", []);
	app.directive("show", function() {
		return {
			link: function(scope, element, attributes) {
				scope.$watch(attributes.show, function(value){
					element.css('display', value ? '' : 'none');
				});
			}
		};
	}
);
