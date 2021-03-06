(function(window, angular) {
  'use strict';

  angular.module('angulartics.application.insights', ['angulartics'])
         .config(['$analyticsProvider', function ($analyticsProvider) {

    angulartics.waitForVendorApi('appInsights', 500, function (appInsights) {
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