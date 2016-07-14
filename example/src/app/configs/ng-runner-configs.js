"use strict";
var ng_configs_1 = require('./ng-configs');
var routeMiddlewares_1 = require('../middlewares/routes/routeMiddlewares');
/**
 * Created by allen on 2016/7/14.
 */
ng_configs_1.app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', routeMiddlewares_1.routeSuccessWrapper(function (event, next, prev) {
        //do what ever you want for your original way
    }));
});
//# sourceMappingURL=ng-runner-configs.js.map