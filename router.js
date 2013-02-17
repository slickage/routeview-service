var router = new require('routes').Router();
var noop = function(req, res){
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Unsupported request.");
};
// random routes
router.addRoute('/', require('./routes/index'));
router.addRoute('/cams/:camDesc?', require('./routes/cams'));
router.addRoute('/regions/:regionName?', require('./routes/regions'));
router.addRoute('/regions/:regionName/cams', require('./routes/cams'));
router.addRoute('/noop', noop);

module.exports = router;


