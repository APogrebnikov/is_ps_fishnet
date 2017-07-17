var servicesModule = angular.module('servicesModule', []);
var controllersModule = angular.module('controllersModule', []);
var directivesModule = angular.module('directivesModule', []);
var mainModule = angular.module('mainModule', ['servicesModule', 'controllersModule', 'directivesModule', 'ngRoute', 'uiGmapgoogle-maps'])
.config(['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
        GoogleMapApiProviders.configure({
            key: 'AIzaSyBKWojtxkjHuh44CNE8mw9S-nX3qWeLHGM',
			v: '3.20', //defaults to latest 3.X anyhow
			libraries: 'weather,geometry,visualization'
        });
    }]);

mainModule.config(function ($routeProvider) {
  $routeProvider.when('/regions', {
    templateUrl: 'modules/regions/regions.html',
    controller: 'regionsController'
  });
  $routeProvider.when('/resources', {
    templateUrl: 'modules/resources/resources.html',
    controller: 'resourcesController'
  });
  $routeProvider.otherwise({
    redirectTo: '/regions'
  });
});