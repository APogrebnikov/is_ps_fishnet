controllersModule.controller('regionsController', function ($scope, NgMap) {
   	var vm = this;
	$scope.currentPolygon = "";
	$scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBKWojtxkjHuh44CNE8mw9S-nX3qWeLHGM"	

			
	NgMap.getMap().then(function(map) {
            vm.map = map;
  	});

			
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
				currentPolygon.setOptions({editable:false});
				
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
				alert("No polygons chosed");
			}
		}
		
		
		
		$scope.editPolygon = function()
		{
			if(isPolygonChosen()) currentPolygon.setOptions({ editable:true });
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
			  indexID: 1,
			  someother: "yes"
			});
			
			google.maps.event.addListener(triangle, 'click', function (event){
				currentPolygon = triangle;
			});  
			
			triangle.setMap(vm.map);
		}
	
})
