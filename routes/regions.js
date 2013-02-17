var util = require('util');
var _ = require('underscore');
var regions = require('../data/regions.json');
// keys are descriptions
// var regions = ['Honolulu', 'Aiea', 'Pearl City', 'Kaneohe', 'Kailua', 'Hawaii Kai'];

module.exports = handler;

function handler(req, res) {
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

