/*
 * Main Index module
 *
 * Import and initialise apps and all modules from here
 */

// Filters
require('./filter/markdown');
require('./filter/number');
require('./filter/string');

// Router
require('./routes');

// Service


// Controllers
require('./controller/main');
require('./controller/home');
require('./controller/register');


// Directives

