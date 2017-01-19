var MyApp;
(function (MyApp) {
    angular.module("RoutingApp", ['ui.router']).config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state('Home', {
            url: '/',
            templateUrl: "MyApp/page1.html",
            controller: MyApp.Controllers.Page1Controller,
            controllerAs: 'controller'
        })
            .state('Page1', {
            url: '/page1',
            templateUrl: "MyApp/page1.html",
            controller: MyApp.Controllers.Page1Controller
        })
            .state('Page2', {
            url: '/page2',
            templateUrl: "MyApp/page2.html",
            controller: MyApp.Controllers.Page2Controller,
            controllerAs: 'controller'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
;
//# sourceMappingURL=myApp.js.map