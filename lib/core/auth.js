'use strict';
/*
 * Auth module
 *
 * 
 */

var api;
    // user = null;

/*
 * Get user object if logged in
 *
 * @return {Object|void}
 */
// function getUser() {
//     return user;
// }


//  * Get logged in state
//  *
//  * @return {Boolean}
 
// function getState() {
//     return !!getUser();
// }

function auth (config) {
    api = require('../api')(config);

    /*
     * Initialise logged state
     *
     * @return void
     */
    function init(callback) {
        // login and log out authentication
        console.log("in core auth ", callback)
        // Call async API method to checked if there's a logged in user
        // api.auth.init(function (err, loggedUser) {
        //     if (loggedUser) { user = loggedUser; }
        //     if (callback) { callback(); }
        // });
    }

    return {
        init     : init
    };
}

module.exports = auth;