var echo = require('../dist/index.js');

var options = {
	"authHost": ".localhost",
	"authEndpoint": "/api/broadcasting/auth",
	"clients": [],
	"database": "redis",
	"databaseConfig": {
		"redis": {
			"port": "6379",
			"host": "localhost",
			"db": "0"
		}
	},
	"devMode": true,
	"host": "0.0.0.0",
	"port": "6001",
	"protocol": "http",
	"socketio": {
		"cors": {
			"origin": true,
			"credentials": true
		}
	},
	"sslCertPath": "/etc/nginx/ssl/default.crt",
	"sslKeyPath": "/etc/nginx/ssl/default.key",
	"subscribers": {"http": true, "redis": true}
}

echo.run(options);
