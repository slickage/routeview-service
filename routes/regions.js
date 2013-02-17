var util = require('util');
var _ = require('underscore');
var jsonData = require('../json_data');

module.exports = handler;

function handler(req, res) {
  var regions = jsonData.regions;
  var resp = {};
  if (req.params.regionName) { 
    var region = regions[req.params.regionName];
    if (region) resp = region;
  }
  else {
    resp = regions;
  }
  res.end(JSON.stringify(resp));
}

