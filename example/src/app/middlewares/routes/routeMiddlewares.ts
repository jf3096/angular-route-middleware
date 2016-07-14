/**
 * Created by allen on 2016/7/14.
 */

import IAngularEvent = angular.IAngularEvent;
import {setTitleMiddleware} from './setTitleMiddleware';
import {routeMiddlewaresPart} from '../../../../libs/routeMiddlewares';

const ROUTE_SUCCESS_MIDDLEWARE_LIST = [setTitleMiddleware];
export const routeSuccessWrapper = routeMiddlewaresPart(ROUTE_SUCCESS_MIDDLEWARE_LIST);