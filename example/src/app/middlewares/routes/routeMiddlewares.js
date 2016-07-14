/**
 * Created by allen on 2016/7/14.
 */
"use strict";
var setTitleMiddleware_1 = require('./setTitleMiddleware');
var routeMiddlewares_1 = require('../../../../libs/routeMiddlewares');
var ROUTE_SUCCESS_MIDDLEWARE_LIST = [setTitleMiddleware_1.setTitleMiddleware];
exports.routeSuccessWrapper = routeMiddlewares_1.routeMiddlewaresPart(ROUTE_SUCCESS_MIDDLEWARE_LIST);
//# sourceMappingURL=routeMiddlewares.js.map