/**
 * Created with JetBrains PhpStorm.
 * User: kerstenburkhardt
 * Date: 09.10.12
 * Time: 22:21
 * To change this template use File | Settings | File Templates.
 */

require.config({
    baseUrl: "/js",
    paths  : {
        "backbone": "/components/backbone/backbone",
        "underscore": "/components/underscore/underscore",
        "jquery": "/components/jquery/jquery",
        "text": "/components/text/text",
        "json": "/components/requirejs-plugins/src/json",
        "jquery-retina": "/components/jquery-retina/dist/jquery.retina.min",
        "bootstrap": "/bootstrap/bootstrap-affix"
    },

    config: {
        text: {
            //Valid values are 'node', 'xhr', or 'rhino'
            env: 'node'
        }
    },

    shim: {
        "underscore": {
            exports: '_'
        },
        "backbone": {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps   : ["underscore", "jquery"],
            //Once loaded, use the global "Backbone" as the
            //module value.
            exports: "Backbone"
        },

        "jquery-retina": {
            deps   : ["jquery"],
            exports: "jQuery.fn.retina"
        },

        "/bootstrap/bootstrap-alert.js": ["jquery"],
        "/bootstrap/bootstrap-button.js": ["jquery"],
        "/bootstrap/bootstrap-carousel.js": ["jquery"],
        "/bootstrap/bootstrap-collapse.js": ["jquery"],
        "/bootstrap/bootstrap-dropdown.js": ["jquery"],
        "/bootstrap/bootstrap-modal.js": ["jquery"],
        "/bootstrap/bootstrap-popover.js": ["jquery", "/bootstrap/bootstrap-tooltip.js"],
        "/bootstrap/bootstrap-scrollspy.js": ["jquery"],
        "/bootstrap/bootstrap-tab.js": ["jquery"],
        "/bootstrap/bootstrap-tooltip.js": ["jquery"],
        "/bootstrap/bootstrap-transition.js": ["jquery"],
        "/bootstrap/bootstrap-typeahead.js": ["jquery"],

        bootstrap: {
            deps: [
                "jquery",
                "/bootstrap/bootstrap-alert.js",
                "/bootstrap/bootstrap-button.js",
                "/bootstrap/bootstrap-carousel.js",
                "/bootstrap/bootstrap-collapse.js",
                "/bootstrap/bootstrap-dropdown.js",
                "/bootstrap/bootstrap-modal.js",
                "/bootstrap/bootstrap-popover.js",
                "/bootstrap/bootstrap-scrollspy.js",
                "/bootstrap/bootstrap-tab.js",
                "/bootstrap/bootstrap-tooltip.js",
                "/bootstrap/bootstrap-transition.js",
                "/bootstrap/bootstrap-typeahead.js"
            ]
        }
    },

    config: {
        //Set the config for the i18n
        //module ID
        i18n: {
            locale: "de-de"
        }
    }
});

require(["backbone", "Router", "Views/Frontpage", "jquery-retina", "bootstrap"], function ( Backbone, Router, Frontpage ) {
    var router = new Router();

    var app = new Frontpage({
        router: router
    });

    app.render();

    Backbone.history.start({pushState: true, silent: false});
});