controllersModule.controller('regionController', function ($scope, NgMap, regionSrvc) {
   	var vm = this;
    var polyList = [];
	$scope.currentPolygon = "";
	$scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBKWojtxkjHuh44CNE8mw9S-nX3qWeLHGM"	
    $scope.id = 0;
			
	NgMap.getMap().then(function(map) {
            vm.map = map;
  	});

		$scope.openPolygon = function(){
			
				regionSrvc.get(1).then(
				function (data) {
					alert(data.data.name+'\n'+data.data.coordinates[0].latitude+'\n'+data.data.coordinates[0].longtude);
					$scope.id = data.data.name;
				},
				function (data, status, headers, config) {
					alert(status);
				});
		}	
		
			
		var isPolygonChosen = function()
		{
			if(currentPolygon != "") return true;
			else return false;
		}
		
		$scope.deletePolygon = function()
		{
			if(isPolygonChosen())
			{
				currentPolygon.setMap(null);
				currentPolygon = "";
			}
			else
			{
				alert("No polygons chosen");
			}
		}
		
		$scope.savePolygon = function()
		{
			if(isPolygonChosen())
			{
				currentPolygon.setOptions({editable:false,draggable:false});
				
				var vertices = currentPolygon.getPath();
				var polygonPoints = [];
				for (var i = 0; i < vertices.length; i++) 
				{
					var xy = vertices.getAt(i);
					polygonPoints.push({ lat: xy.lat(), lon: xy.lng() });
				}
				currentPolygon = "";
				return polygonPoints;
			}
			else
			{
				alert("No polygons chosen");
			}
		}
		
		
		
		$scope.editPolygon = function()
		{
			if(isPolygonChosen()) currentPolygon.setOptions({ editable:true, draggable:true });
			else alert("No polygons chosen");
		}
		
		$scope.createPolygon = function()
		{
			var mapCenterCoords = vm.map.getCenter();
			var lat = mapCenterCoords.lat();
			var lng = mapCenterCoords.lng();
			var mapZoom = vm.map.getZoom();
			var scaling = 5/mapZoom; 
			
            
			var triangleCoords = [
			  {lat: lat+scaling, lng: lng},
			  {lat: lat-scaling, lng: lng+scaling},
			  {lat: lat-scaling, lng: lng-scaling}  
			];
			
			var triangle = new google.maps.Polygon({
			  paths: triangleCoords,
			  strokeColor: '#FF0000',
			  strokeOpacity: 0.8,
			  strokeWeight: 2,
			  fillColor: '#FF0000',
			  fillOpacity: 0.35,
              draggable: false,
			  indexID: polyList.length+1,
			});
			
            polyList.push(triangle);
            
			google.maps.event.addListener(triangle, 'click', function (event){
				currentPolygon = triangle;
                //$scope.id = currentPolygon.get("indexID");
			});  
			
			triangle.setMap(vm.map);
		}
	
})