 var config = require('./config').Config,
	api = require('./lib/api').Api.buildFromFile(__dirname + '/' + config.schemapath, config.oauthkey, config.oauthsecret),
	prop;

for (prop in api) {
	if (api.hasOwnProperty(prop)) {
		exports[prop] = api[prop]; 
	}
}

exports.with = function(options) {
	var prop;

	if (typeof options === "undefined") {
		return;
	}

	for (prop in config) {
		if (!options.hasOwnProperty(prop)) {
			options[prop] = config[prop];
		}
	}
	
	return require('./lib/api').Api.buildFromFile(__dirname + '/' + options.schemapath, options.oauthkey, options.oauthsecret);
}
