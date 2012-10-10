define(["backbone", "underscore", "json!/j/navigation"], function (Backbone, _, navigation) {
    var routes = {};

    if (navigation.brand) {
        routes[navigation.brand.link.substr(1)] = navigation.brand.route;
    }

    if (navigation.navigation) {
        _.each(navigation.navigation, function (item) {
            routes[item.link.substr(1)] = item.route;
        });
    }

    var Workspace = Backbone.Router.extend({
        routes: routes
    });

    return Workspace;
});