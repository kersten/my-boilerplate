var express = require("express"),
    _ = require("underscore")._;

var DEBUG = false;

function MyBoilerplate () {
    "use strict";

    this.app = express();
    this.routes = {};
}

MyBoilerplate.prototype.configuration = function ( options ) {
    "use strict";

    var app = this.app;

    _.each(options, function (item, key) {
        switch (key) {
            case "navigation":
                console.log(key, item);

                break;

            default:
                if (DEBUG) {
                    console.log(key + " is not a known configuration setting");
                }
        }
    });
};

MyBoilerplate.prototype.enable = function (setting, options) {
    "use strict";

    var app = this.app;

    switch (setting.toLowerCase()) {
        case "debug":
            DEBUG = true;

            app.configure(function () {
                app.use(express.logger);
            });

            break;
    }
};

MyBoilerplate.prototype.addRoute = function (route, method, fn) {
    this.routes[route] = {
        method: method,
        fn: fn
    };
};

MyBoilerplate.prototype.start = function ( port ) {
    "use strict";
    var app = this.app;

    _.each(this.routes, function (route, name) {
        if (DEBUG) {
            console.log("Registering " + route.method.toUpperCase() + " route: " + name);
        }

        app[route.method.toLowerCase()](name, route.fn);
    });

    port = port || 8080;

    this.app.listen(port);

    if (DEBUG) {
        console.log("Server successfully listening on port " + port);
    }
};

module.exports = new MyBoilerplate;