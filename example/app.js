(function(angular) {
    'use strict';
    
    var app = angular.module('app', ['ui.router', 'angulartics', 'angulartics.application.insights']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('page', {
            url: '/page:id',
            controller: function($stateParams) {
            this.id = $stateParams.id;
            },
            controllerAs: 'vm',
            templateUrl: 'page.html'
        });
        $urlRouterProvider.otherwise('/page1');
    });
    
    app.controller('MainCtrl', function($analytics) {
        var main = this;
        main.setUserId = function() {
            $analytics.setUsername(main.userId);
        }
    });
}(window.angular));