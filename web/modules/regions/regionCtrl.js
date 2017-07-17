controllersModule.controller('regionController',function ($scope,settings) {
    console.log("hello");
    $scope.hello = "helloRegion "+ settings.server ;
    $scope.page = {
        group: {}
    };

    $scope.page.init = function () {
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