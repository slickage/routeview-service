var util = require('util');
var _ = require('underscore');
var cams = require('../data/searchable_cams.json');

module.exports = handler;

function handler(req, res) {
  var resp = {};
  if (req.params.camDesc) { 
    var cam = cams[req.params.camDesc];
    if (cam) resp = cam;
  }
  else {
    resp = cams;
  }
  res.end(JSON.stringify(resp));
}
