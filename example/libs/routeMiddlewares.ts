import IRoute = angular.route.IRoute;
import IAngularEvent = angular.IAngularEvent;

/**
 * Created by allen on 2016/7/9.
 */
export interface IRouteCombination<IParams> {
    params?:IParams;
    pathParams?:any;
    $$route?:IRoute
}

type RouteMiddlewareType = (event:IAngularEvent, next:IRouteCombination<any>, prev:IRouteCombination<any>)=>any;

class RouteMiddlewareProcessor {
    private middlewares:RouteMiddlewareType[];

    constructor(...middlewares:RouteMiddlewareType[]) {
        this.middlewares = middlewares || [];
    }

    public push(middleware:RouteMiddlewareType) {
        this.middlewares.push(middleware);
    }

    public process(event:IAngularEvent, next:IRouteCombination<any>, prev:IRouteCombination<any>):void {
        this.middlewares.forEach((middleware)=> {
            middleware(event, next, prev);
        });
        (event as any).middlewares = this.middlewares;
    }
}

export function routeMiddlewaresPart(middlewares:RouteMiddlewareType[]):any {
    const rmdProcessor = new RouteMiddlewareProcessor(...middlewares);
    return (routeImpl:RouteMiddlewareType)=> {
        rmdProcessor.push(routeImpl);
        return (event:IAngularEvent, next:IRouteCombination<any>, prev:IRouteCombination<any>)=> {
            rmdProcessor.process(event, next, prev);
        }
    }
}
