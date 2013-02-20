var util = require('util');
var _ = require('underscore');
var request = require('request');
var jsonData = require('../json_data');

module.exports = handler;

function handler(req, res) {
  var camURL = req.splats[0];
  if (camURL) {
    var url = "http://goakamai.org/" + camURL;
    console.log('Getting camera from: ' + url);
    req.headers['Referer'] = "http://goakamai.org/Home.aspx";
    var x = request(url)
    req.pipe(x)    
    x.pipe(res)
  }
  else {
    res.end();
  }
}

