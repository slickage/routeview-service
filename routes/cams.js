var util = require('util');
var _ = require('underscore');
var cams = require('../data/cams.json');
// keys are descriptions
var searchableCams = {};
_.map(cams, function(cam) {
  searchableCams[cam.description] = cam
});

module.exports = handler;

function handler(req, res) {
  var resp = {};
  if (req.params.camDesc) { 
    var cam = searchableCams[req.params.camDesc];
    if (cam) resp = cam;
  }
  else {
    resp = searchableCams;
  }
  res.end(JSON.stringify(resp));
}
