"use strict";
var ng_configs_1 = require('./ng-configs');
var HomeCtrl_1 = require('../controllers/HomeCtrl');
var SubCtrl_1 = require('../controllers/SubCtrl');
/**
 * Root angular app router configuration
 *
 * @return void
 */
ng_configs_1.app.config(function ($routeProvider, $locationProvider) {
    /**
     * Enable Html5 Mode, which means remove hash tag in url. Require Html5 browser history supports as well as server side configuration
     */
    $locationProvider.html5Mode(true);
    /**
     * Route path configurations
     */
    $routeProvider
        .when('/', {
        template: require('../controllers/tpl/home.html'),
        title: "Home Page",
        controller: HomeCtrl_1.HOME_CTRL,
        controllerAs: 'home'
    })
        .when('/sub', {
        template: require('../controllers/tpl/sub.html'),
        title: "Sub Page",
        controller: SubCtrl_1.SUB_CTRL,
        controllerAs: "sub"
    });
});
//# sourceMappingURL=route-configs.js.map