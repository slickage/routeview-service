exports.cams = require('./data/searchable_cams.json');
exports.regions = require('./data/regions.json');

exports.camsForRegion = function(region) {
  if (region === "Airport") return require('./data/regions/' + region + '.json');
  else return require('./data/regions/Airport.json');
}
