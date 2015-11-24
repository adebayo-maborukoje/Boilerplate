var app = require('./app');

/*
 * Routes module
 *
 * Initialise routes htom here
 */

app.config(function ($routeProvider) {
    $routeProvider

    // Challenges selection view
    .when('/index', {
        templateUrl : '/home.html',
        controller  : 'ChallengesController'
    })
    .when('/register', {
        templateUrl : '/register.html',
        controller  : 'registerController'
    })

    .otherwise({ redirectTo: '/index' });
});
