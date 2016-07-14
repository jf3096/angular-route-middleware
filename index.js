"use strict";
var RouteMiddlewareProcessor = (function () {
    function RouteMiddlewareProcessor() {
        var middlewares = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            middlewares[_i - 0] = arguments[_i];
        }
        this.middlewares = middlewares || [];
    }
    RouteMiddlewareProcessor.prototype.push = function (middleware) {
        this.middlewares.push(middleware);
    };
    RouteMiddlewareProcessor.prototype.process = function (event, next, prev) {
        this.middlewares.forEach(function (middleware) {
            middleware(event, next, prev);
        });
        event.middlewares = this.middlewares;
    };
    return RouteMiddlewareProcessor;
}());
function routeMiddlewaresPart(middlewares) {
    var rmdProcessor = new (RouteMiddlewareProcessor.bind.apply(RouteMiddlewareProcessor, [void 0].concat(middlewares)))();
    return function (routeImpl) {
        rmdProcessor.push(routeImpl);
        return function (event, next, prev) {
            rmdProcessor.process(event, next, prev);
        };
    };
}
exports.routeMiddlewaresPart = routeMiddlewaresPart;
//# sourceMappingURL=index.js.map