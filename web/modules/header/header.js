controllersModule.controller('headerController', function ($scope, $location) {
    $scope.location = $location;
    $scope.allItems = 
    [
        {
            title: 'Регионы',
            path: '/region',
            img: 'region.png'
        },
        {
            title: 'Ресурсы',
            path: '/resource',
            img: 'resource.png'
        },
        {
            title: 'Компании',
            path: '/company',
            img: 'company.png',
            items: [
                {
                    title: 'Справочник',
                    path: '/company/editor'
                },
                {
                    title: 'Отчеты',
                    path: '/company/report'
                }
            ]
        }
    ];

    $scope.items = [];

    $scope.isCurrentPath = function (item) {
        if (item.items)
            return item.items.some(it => it.path == $location.path()) || item.path == $location.path();
        if (item.paths)
            return item.paths.some(it => it == $location.path()) || item.path == $location.path();
        return item.path == $location.path();
    }

});

directivesModule.directive('headerNavbar', function () {
    return {
        replace: true,
        scope: true,
        templateUrl: 'modules/header/header.html',

        controller: 'headerController'
    }
});