define(["backbone", "Navigation", "Views/Footer"], function (Backbone, Navigation, Footer) {
    var Application = Backbone.View.extend({
        el: "#application",
        views: {},

        initialize: function () {
            var self = this;

            this.navigation = new Navigation();
            $("#navigation").append(this.navigation.render().el);

            var footer = new Footer({
                el: '#footer'
            });
            footer.render();

            this.options.router.on("all", function (route) {
                self.load(route.replace(/route:/, ""));
            });
        },

        load: function (page) {
            var self = this,
                view = "Views/" + page.charAt(0).toUpperCase() + page.slice(1);

            if (this.views[view] === undefined) {
                require([view], function (View) {
                    self.views[view] = new View({
                        el: "#content"
                    });

                    self.views[view].render();

                    $(".nav > li > a[href='/#!" + page + "']").parent().addClass("active");
                });
            } else {
                self.views[view].render();
            }
        },

        render: function () {
            return this;
        }
    });

    return Application;
});