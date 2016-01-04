/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');
var Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  var mockSocketTree = new Funnel('node_modules/mock-socket/dist', {
     srcDir: '/',
     include: ['*.js'],
     destDir: '/assets/mock-socket'
  });


  app.import('bower_components/uri.js/src/URI.min.js');
  app.import('bower_components/socket.io-client/socket.io.js');

  return app.toTree(mockSocketTree);
};
