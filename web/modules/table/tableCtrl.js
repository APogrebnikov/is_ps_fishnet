controllersModule.controller('tableController', function ($scope,$location, regionSrvc) {

	$scope.regions = []; //= [1,2,3];

	$scope.editRegion = function () {

		$location.path('/region/1').replace();
	}

	$scope.removeRegion = function () {


	}
	$scope.init = function () {
		regionSrvc.getAll().then(function (data) {
			for (var i = 0; i < data.data.children.length; i++) {
				$scope.regions.push(JSON.parse(data.data.children[i]));
				//alert(JSON.parse(data.data.children[i]).coordinates[0]);
			}
			//$scope.regions = data.data.children
		}, function (data, status, headers, config) {
			alert(status);
		});
	}
	/* var init = function(){
			//regionSrvc.getAll().then(
				//function (data) {
					//alert(data.data.children[0].name+'\n'+data.data.children[0].coordinates[0].latitude+'\n'+data.data.coordinates[0].longtude);
					//alert(JSON.parse(data.data));
					//var x= data.data.children["name"];
					//$scope.regions = x;
					alert(x);
				},
				function (data, status, headers, config) {
					alert(status);
				});
	};
	
	init(); */


})