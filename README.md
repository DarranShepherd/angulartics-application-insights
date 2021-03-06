## angulartics-application-insights

[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Bower version][bower-image]][bower-url] [![MIT license][license-image]][license-url]

Microsoft Application Insights plugin for [Angulartics](https://github.com/angulartics/angulartics).

## Example

To run the example, edit `index.html` and set the instrumentationKey parameter to the value provided by Microsoft in the Azure Portal. Browse to http://localhost:8080/ after running the example from the command line in the example directory with
```shell
npm start
``` 

Navigating between pages (using ui-router) will instigate page views.

The "Custom Event" button uses the `analytics-on` and `analytics-event` directives to track a custom event when it is clicked.

Entering a username in the input field and clicking "Set User ID" will set the authenticated user context for the tracking session so that all page views are tracked in Application Insights with as Authenticated user traffic with the Auth user Id recorded.

## Install

First make sure you've read installation and setup instructions for [Angulartics](https://github.com/angulartics/angulartics#install).

Then you can install this package either with `npm` or with `bower`.

### bower

```shell
bower install angulartics-application-insights
```

Add the `<script>` to your `index.html`:

```html
<script src="/bower_components/angulartics-application-insights/dist/angulartics-application-insights.min.js"></script>
```

Then add `angulartics.application.insights` as a dependency for your app:

```javascript
angular.module('myApp', [
  'angulartics', 
  'angulartics.application.insights'
]);
```

### npm (untested)

```shell
npm install angulartics-application-insights
```

Then add `angulartics.application.insights` as a dependency for your app:

```javascript
require('angulartics')

angular.module('myApp', [
  'angulartics', 
  require('angulartics-application-insights')
]);
```

## Changes in the Application Insights snippet

The snippet code provided by Microsoft does an automatic pageview hit, but this is already done by Angulartics (unless you disable it) so make sure to delete the tracking line:

```js
      ...
       window.appInsights=appInsights;
       appInsights.trackPageView(); // DELETE THIS LINE!
    </script>
```

Done. Open your app, browse across the different routes and check [the Microsoft Azure portal](https://portal.azure.com) to see the hits.

## Documentation

Documentation is available on the [Angulartics site](http://angulartics.github.io/).

### User tracking
`$analytics.setUsername(username)` will set the user context in Application Insights so that all events are associated with the User ID.

## Development

```shell
npm run build
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/angulartics-application-insights.svg
[npm-url]: https://npmjs.org/package/angulartics-application-insights
[npm-downloads-image]: https://img.shields.io/npm/dm/angulartics-application-insights.svg
[npm-downloads-url]: https://npmjs.org/package/angulartics-application-insights
[bower-image]: https://img.shields.io/bower/v/angulartics-application-insights.svg
[bower-url]: http://bower.io/search/?q=angulartics-application-insights
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
