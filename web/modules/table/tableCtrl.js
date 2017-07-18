controllersModule.controller('tableController', function ($scope, regionSrvc) {
	
	$scope.regions;
	
	$scope.editRegion = function(){
		
		
	}
	
	$scope.removeRegion = function(){
		
		
	}
	
	var init = function(){
			regionSrvc.getAll().then(
				function (data) {
					//alert(data.data.children[0].name+'\n'+data.data.children[0].coordinates[0].latitude+'\n'+data.data.coordinates[0].longtude);
					alert(JSON.stringify(data.data));
					//$scope.regions =data.data.childrens;
				},
				function (data, status, headers, config) {
					alert(status);
				});
	};
	
	init();
	
	
})