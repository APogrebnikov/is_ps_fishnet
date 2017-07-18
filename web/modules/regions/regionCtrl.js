controllersModule.controller('regionController', function ($scope, settings, regionSrvc) {
    console.log("hello");
    $scope.hello = "helloRegion " + settings.server;
    $scope.page = {
        group: {}
    };

    $scope.page.init = function () {
        regionSrvc.getAll().then(
            function (data) {
                //alert(data.data.name+'\n'+data.data.coordinates[0].latitude+'\n'+data.data.coordinates[0].longtude);
                alert( JSON.stringify(data.data));
            },
            function (data, status, headers, config) {
                alert(status);
            });
        /*  if (false) { //PlaceHolder
             $scope.page.formCaption = "Редактирование группы";
             $scope.page.formBtnSubmitName = "Сохранить";
             //$scope.page.loadGroup($routeParams.id);        
         } else {
             $scope.page.formCaption = "Добавление группы";
             $scope.page.formBtnSubmitName = "Добавить";
         } */

        // $scope.page.loadRegion();
    };

    /* $scope.page.loadRegion = function (id) {
        regionSrvc.get(id).then(
            function (data) {
                $scope.page.group = data;
            },
            function (data, status, headers, config) {
                $scope.page.gralert = {
                    title: 'Внимание!',
                    msg: 'Группы не загружены. ' + data,
                    cssClass: 'alert alert-error',
                    visible: true
                };
            });
    }; */
    $scope.page.init();
})