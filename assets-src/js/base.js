/*
*
*
  base.js  -> loads the required external dependecies.
	Please check package.json for details.
*
*/


// ---- LIBS and PLUGINS from NPMJS.ORG loaded via browserify ------
window.jQuery = window.$ = require('jquery');



//----- LIBS and PLUGINS loaded localally via browserify ------



// --- PLUGINS that are NOT loaded via NPMJS.ORG and are NOT browserify modules --------------------------
var plugins = require('./plugins/');
