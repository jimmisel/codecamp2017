namespace MyApp {
    angular.module("RoutingApp", ['ui.router']).config((
        $stateProvider: ng.ui.IStateProvider,
        $locationProvider: ng.ILocationProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider
    ) => {
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
};