(function(window, angular, undefined) {
  'use strict';

  /**
   * @ngdoc overview
   * @name angulartics.application.insights
   * Enables analytics support for Microsoft Application Insights (https://azure.microsoft.com/en-gb/services/application-insights/)
   */
  angular.module('angulartics.application.insights', ['angulartics'])
         .config(['$analyticsProvider', function ($analyticsProvider) {

    $analyticsProvider.waitForVendorApi('appInsights', 500, function (appInsights) {
      $analyticsProvider.registerPageTrack(function (path) {
        appInsights.trackPageView(path);
      });
    
      $analyticsProvider.registerEventTrack(function (action, properties) {
        appInsights.trackEvent(action, properties);
      });

      $analyticsProvider.registerSetUsername(function (userId) {
        appInsights.setAuthenticatedUserContext(userId);
      });
    });
  }]);
})(window, window.angular);