controllersModule.controller('resourceController', function ($scope, resourceSrvc) {
    $scope.resources = []; //= [1,2,3];

	$scope.editResource = function (id) {
		$location.path('/region/'+id).replace();
	}

	$scope.removeResource = function (id) {


	}
	
	$scope.addResource = function (){
		$location.path('/region/').replace()
	}
	
	$scope.init = function () {
		resourceSrvc.getAll().then(function (data) {
			
			var resourceJSONString = data.data.substring(0, data.data.length-1);
			var resourcesData = JSON.parse(resourceJSONString);
			
				
			for (var i = 0; i < resourcesData.children.length; i++) {
				$scope.resources.push(JSON.parse(resourcesData.children[i]));

			}
			
		}, function (data, status, headers, config) {
			alert(status);
		});
	}
})