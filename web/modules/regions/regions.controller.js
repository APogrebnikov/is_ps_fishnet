controllersModule.controller('regionsController', function ($scope, uiGmapGoogleMapApi) {
   
	
	$scope.map;
	$scope.currentPolygon = "";
			
	uiGmapGoogleMapApi.then(function(maps) {
		maps = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
		$scope.map = maps;
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
		
		
		
		$scope.initMap = function() 
		{
			var mapProp = {
				center:new google.maps.LatLng(24.886, -70.268),
				zoom:1,
			};
			map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
		}
		
		$scope.editPolygon = function()
		{
			if(isPolygonChosen()) currentPolygon.setOptions({ editable:true });
			else alert("No polygons chosen");
		}
		
		$scope.createPolygon = function()
		{
			var mapCenterCoords = map.getCenter();
			var lat = mapCenterCoords.lat();
			var lng = mapCenterCoords.lng();
			var mapZoom = map.getZoom();
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
			
			triangle.setMap(map);
		}
	
})