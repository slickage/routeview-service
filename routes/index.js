var util = require('util');

module.exports = index;

function index(req, res) {
  console.log(util.inspect(req.headers, true, null, true));
  if (req.headers['accept'] === 'application/json') {
    res.end(JSON.stringify({}));
  }
  else {
    res.template('index.ejs', {foo: 'bar'});
  }
}


