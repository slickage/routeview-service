var http = require('http');
var site = require('./site');
http.globalAgent.maxSockets = Infinity;

var httpServer = http.createServer(site);
module.exports = httpServer;

