var servicesModule = angular.module('servicesModule', []);
var controllersModule = angular.module('controllersModule', []);
var directivesModule = angular.module('directivesModule', []);
var mainModule = angular.module('mainModule', ['servicesModule', 'controllersModule', 'directivesModule', 'ngRoute', 'ngMap'])

mainModule.config(function ($routeProvider) {
    
  $routeProvider.when('/region/:regionid', {
    templateUrl: 'modules/regions/region.html',
    controller: 'regionController'
  });

  $routeProvider.when('/resource', {
    templateUrl: 'modules/resources/resource.html',
    controller: 'resourceController'
  });
  $routeProvider.when('/table', {
    templateUrl: 'modules/table/table.html',
    controller: 'tableController'
  });
  $routeProvider.otherwise({
    redirectTo: '/region'
  })
});