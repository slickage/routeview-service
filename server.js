var util = require('util');

// global env + requires
var httpServer = require('./http_server');
var config = require('./config');

util.log('route_view-api');
util.log(util.inspect(config, true, null));

httpServer.listen(config.port, function() {
  util.log('HTTP server listening on port ' + config.port);
});

