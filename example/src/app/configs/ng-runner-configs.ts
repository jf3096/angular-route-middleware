import {app} from './ng-configs';
import {routeSuccessWrapper} from '../middlewares/routes/routeMiddlewares';
import IAngularEvent = angular.IAngularEvent;
import {IRouteCombination} from '../../../libs/routeMiddlewares';
/**
 * Created by allen on 2016/7/14.
 */

app.run(($rootScope)=> {
    $rootScope.$on('$routeChangeSuccess', routeSuccessWrapper((event:IAngularEvent, next:IRouteCombination<any>, prev:IRouteCombination<any>)=> {
        //do what ever you want for your original way
    }));
});