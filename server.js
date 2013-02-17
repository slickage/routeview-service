var util = require('util');

// global env + requires
var env = process.env.NODE_ENV || 'development';
var httpServer = require('./http_server');
var config = require('./' + env + '.config.json');

util.log('route_view-api');
util.log(util.inspect(config, true, null));

var port = process.env.HTTP_PORT || config.port;
httpServer.listen(port, function() {
  util.log('HTTP server listening on port ' + port);
});

