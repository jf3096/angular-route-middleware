# angular-route-middleware

## What can it do
* User authentication route intercept in $routeChangeStart
* Update page title while redirect to a new page. Handled in $routeChangeSuccess
* Manage error page for different Http status. e.g. 404+,500+,etc
* Adding animation/transition while page change

I created a scaffold/demo page as get started.

>Warning: Make sure you're using Node.js and NPM

## Requirements
It is not limited in angular-route but able to apply to other library like ui-route or ngNewRoute.
* angular-route

## Source of Idea
The whole idea was inspired by react-thunk and is to introduce a middleware for angular route module so that developers are able to manage route state in a loosely coupled way. It is quite useful for following cases:

According to angular route source code (line: 193.this.when = function(path, route).... [AngularJS v1.5.7]): it is shallow copying 'when object' and merging more data for further routing process

(eval->prepareRoute->$broadcast'$routeChangeStart'->$broadcast'$routeUpdate' -> '$routeChangeSuccess'
                                                                             -> '$routeChangeError'
)

The whole process keeps reuse 'route' variable (initialize in line: 80), and keep extending the same object until passing into
$route variable(line: 504) for another round of encapsulation.

But the whole idea it did not change or edit the route/$route object during the process, which I believe is a good idea to follow pure function (FP) to prevent any side effect.

Thus, as long as I am not editing/destructuring the route/$route object will be fine.
This gives me a chance to create a middleware and **only adding/editing/removing ** my own variable will not interrupt the entire angular route process.

### Quick start

> Clone/Download the repo:

```bash
# clone our repo
$ git clone https://github.com/jf3096/angular-route-middleware.git

# change directory to your app
$ cd demo

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# How to use
Here is an example of creating a middleware (/demo/src/app/middlewares/setTitleMiddleware.ts):

```bash
export function setTitleMiddleware(event:IAngularEvent, next:IRouteCombination<any>, prev:IRouteCombination<any>) {
    if (!next.$$route) {
        next.$$route = {};
    }
    setWxTitle((next.$$route as any).title || OTHERWISE_TITLE)
}
```

Once it is done, just register it to a root route middleware (/demo/src/app/middlewares/routeMiddlewares.ts) in a simple and neatly way:

```bash
const ROUTE_SUCCESS_MIDDLEWARE_LIST = [setTitleMiddleware];
export const routeSuccessWrapper = routeMiddlewaresPart(ROUTE_SUCCESS_MIDDLEWARE_LIST);
```

Lastly, wrap [routeSuccessWrapper] in $routeChangeSuccess,$routeChangeError,$routeChangeStart
```bash
$rootScope.$on('$routeChangeSuccess', routeSuccessWrapper((event:IAngularEvent, next:IRouteCombination<any>, prev:IRouteCombination<any>)=> {
   //do what ever you want for your original way
}));
```

Now, you can directly write title in your router config (demo/src/app/configs/route-configs.ts) which by default title cannot recognize in angular route:
```bash
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
```
## Demo
![alt tag](https://raw.githubusercontent.com/jf3096/angular-route-middleware/master/gif/set-title.gif)