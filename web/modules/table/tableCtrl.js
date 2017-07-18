controllersModule.controller('tableController', function ($scope, regionSrvc) {
	
	$scope.regions;
	
	$scope.editRegion = function(){
		
		
	}
	
	$scope.removeRegion = function(){
		
		
	}
	
	var init = function(){
			regionSrvc.getAll().then(
				function (data) {
					$regions = data.data;
				},
				function (data, status, headers, config) {
					alert(status);
				});
	};
	
	init();
	
	
})