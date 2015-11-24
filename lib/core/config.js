/*
 * Config module
 *
 * Central config inclusive of environment sensitive variable parsed
 * from rendered page
 */
"use strict";
// var langSynonyms = require('../language/synonyms');

module.exports = {
    "default": {
        DEBUG_LEVEL     : 1,
        PRODUCTION      : window.CONFIG ? window.CONFIG.PRODUCTION : false,
        TEST_MODE       : window.CONFIG ? window.CONFIG.TEST_MODE : false,
        API_URL         : window.CONFIG ? window.CONFIG.API_URL : false,
        CHALLENGES_URL : false,
        DOMAIN_CFG: { },
    },
    "development": {},
    "staging": {},
    "production": {}

};
