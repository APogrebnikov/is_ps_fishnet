controllersModule.controller('totalQuotaController', function ($routeParams, $scope, $location, totalQuotaSrvc, regionSrvc) {
	var rid = $routeParams.regionid
	regionSrvc.get(rid).then(
		function (data) {
			$scope.currentRegion = data.data;
		},
		function (data, status, headers, config) {});
	$scope.resources = [
		["resource1", 123, new Date(2011, 1, 11).format("yyyy-mm-dd"), new Date(2011, 0, 1)],
		["resource2", 123, new Date(2011, 0, 1), new Date(2011, 0, 1)],
		["resource3", 123, new Date(2011, 0, 1), new Date(2011, 0, 1)],
		["resource4", 123, new Date(2011, 0, 1), new Date(2011, 0, 1)],
		["resource5", 123, new Date(2011, 0, 1), new Date(2011, 0, 1)],
		["resource6", 123, new Date(2011, 0, 1), new Date(2011, 0, 1)],
	];

	$scope.hidder = true;

	$scope.save

	$scope.hide = function (resource) {
		if (resource) {
			$scope.name = resource[0];
			$scope.code = resource[1];
			$scope.timeFrom = resource[2];
			$scope.timeTo = resource[3];
		} else {
			$scope.name = "";
			$scope.code = "";
			$scope.timeFrom = "";
			$scope.timeTo = "";
		}

		$scope.hidder = !$scope.hidder;
	}



	$scope.editRegion = function (id) {
		$location.path('/region/' + id).replace();
	}

	$scope.removeRegion = function (item) {
		//$scope.regions.splice($scope.regions.indexOf(item),1);
		regionSrvc.remove(item.id);

		//$location.path('/regionlist').replace()

	}

	$scope.addRegion = function () {
		$location.path('/region/').replace()
	}

	$scope.init = function () {
		totalQuotaSrvc.getAllResources().then(function (data) {
			//alert(data.data.toSource());
			for (var i = 0; i < data.data.length; i++) {
				//$scope.resources.push(JSON.parse(data.data[i]));
				//alert(JSON.parse(data.data.children[i]).coordinates[0]);
			}
			//$scope.regions = data.data.children
		}, function (data, status, headers, config) {
			alert(status);
		});
	}


});