'use strict';
//dddxddddddвddde

/*===========================================================================================
Регионы
===========================================================================================*/

servicesModule.factory('regionSrvc', settings, function(RESTSrvc) {    
    return {
    	/* Все регионы */
        getAll: function(){
            return RESTSrvc.getPromise({method: 'GET', url: settings.server + '/json/region'});
        },
        /* Все группы факультета */
        /* getRegions: function(id){
            return RESTSrvc.getPromise({method: 'GET', url: DemoSetting.appName + '/json/region/' + id + '/group'});
        }, */
		/*Сохранить / создать регион */
		save: function(region){
			return RESTSrvc.getPromice({method: 'POST', url: settings.server + '/json/region', data: region});
		},
		/* Удалить регион по ИД */
		remove: function(id){
			return RESTSrvc.getPromice({method: 'DELETE', url: settings.server + '/json/region/' + id});
		},
		/* Получить регион по ИД */
		get: function(id){
			return RESTSrvc.getPromice({method: 'GET', url: settings.server + '/json/region/' + id});
		}

    }
});
