import ILocationProvider = angular.ILocationProvider;
import IRouteProvider = angular.route.IRouteProvider;
import {app} from './ng-configs';
import {HOME_CTRL} from '../controllers/HomeCtrl';
import {SUB_CTRL} from '../controllers/SubCtrl';
import IRoute = angular.route.IRoute;
/**
 * Created by allen on 2016/7/14.
 */

/**
 * After adding set-title-middleware, it requires to added an extra property in route config.
 * Therefore extensions shown as followings
 *
 * @interface
 */
interface ICustomRoute extends IRoute {
    title:string;
}

/**
 * Re-extend when for IRouteProvider interface
 *
 * @interface
 */
interface ICustomRouteProvider extends IRouteProvider {
    when(path:string, route:ICustomRoute):ICustomRouteProvider;
}

/**
 * Root angular app router configuration
 *
 * @return void
 */
app.config(function ($routeProvider:ICustomRouteProvider, $locationProvider:ILocationProvider):void {
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
            controller: HOME_CTRL,
            controllerAs: 'home'
        })
        .when('/sub', {
            template: require('../controllers/tpl/sub.html'),
            title: "Sub Page",
            controller: SUB_CTRL,
            controllerAs: "sub"
        })
});