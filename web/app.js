var servicesModule = angular.module('servicesModule', []);
var controllersModule = angular.module('controllersModule', []);
var directivesModule = angular.module('directivesModule', []);
var mainModule = angular.module('mainModule', ['servicesModule', 'controllersModule', 'directivesModule', 'ngRoute']);

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