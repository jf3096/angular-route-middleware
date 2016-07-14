"use strict";
function setWxTitle(title) {
    if (title) {
        document.title = title;
        // if (DeviceUtil.isIOS()) {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "/img/logo.png");
        iframe.setAttribute("style", "display:none");
        iframe.addEventListener('load', function () {
            setTimeout(function () {
                iframe.removeEventListener('load', null);
                document.body.removeChild(iframe);
            }, 0);
        });
        document.body.appendChild(iframe);
    }
}
var OTHERWISE_TITLE = "页面不存在";
function setTitleMiddleware(event, next, prev) {
    if (!next.$$route) {
        next.$$route = {};
    }
    setWxTitle(next.$$route.title || OTHERWISE_TITLE);
}
exports.setTitleMiddleware = setTitleMiddleware;
//# sourceMappingURL=setTitleMiddleware.js.map