"use strict";
/*
 * Angular app module
 *
 * Define behaviour for app `run` and `config`
 */

var api, auth, cfg, envCfg,
    config = require('./core/config'),
    // analytics = require('./core/analytics'),
    app = angular.module('boilerplate', ['ngRoute']),
    domainCfg;

cfg = angular.extend(config.default, config[window.ENV]);

envCfg = {
    API_URL     : cfg.API_URL,
    OFFLINE     : cfg.OFFLINE
};

auth = require('./core/auth')(envCfg);
api = require('./api')(envCfg);

window.CONFIG = cfg;
domainCfg = cfg.DOMAIN_CFG;

// Configure app
app.config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});


// Run app
app.run(function ($rootScope) {
    // Update basePath on route change
    $rootScope.$on('$routeChangeSuccess', function (e, route) {
        var path = route.$$route ? route.$$route.originalPath : null;
        $rootScope.basePath = path ? path.split('/')[1] : '';
    });
});

module.exports = app;
