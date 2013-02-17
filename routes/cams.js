var util = require('util');
var _ = require('underscore');
var jsonData = require('../json_data');

module.exports = handler;

function handler(req, res) {
  var cams;
  var regions = jsonData.regions;
  var resp = {};

  // check region -- regionName will narrow search down
  if (req.params.regionName) {
    var region = regions[req.params.regionName];
    if (region) {
      console.log('cams not reduced to regions yet.. unimplemented');
      console.log('still returning all cams');
      cams = jsonData.cams;
    }
    else {
      cams = {};
    }
  }
  else {
    cams = jsonData.cams;
  }

  if (req.params.camDesc) { 
    var cam = cams[req.params.camDesc];
    if (cam) resp = cam;
  }
  else {
    resp = cams;
  }
  res.end(JSON.stringify(resp));
}
