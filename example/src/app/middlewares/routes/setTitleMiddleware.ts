import IAngularEvent = angular.IAngularEvent;
import {IRouteCombination} from '../../../../libs/routeMiddlewares';

function setWxTitle(title:string):void {
    if (title) {
        document.title = title;
        // if (DeviceUtil.isIOS()) {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "/img/logo.png");
        iframe.setAttribute("style", "display:none");
        iframe.addEventListener('load', function () {
            setTimeout(()=> {
                iframe.removeEventListener('load', null);
                document.body.removeChild(iframe);
            }, 0);
        });
        document.body.appendChild(iframe);
        // }
    }
}

const OTHERWISE_TITLE = "页面不存在";

export function setTitleMiddleware(event:IAngularEvent, next:IRouteCombination<any>, prev:IRouteCombination<any>) {
    if (!next.$$route) {
        next.$$route = {};
    }
    setWxTitle((next.$$route as any).title || OTHERWISE_TITLE)
}