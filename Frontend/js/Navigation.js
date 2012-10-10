define(["backbone", "Navigation/Main", "Navigation/Brand", "json!/j/navigation"], function (Backbone, NavigationMain, NavigationBrand, navigationData) {
    var Navigation = Backbone.View.extend({
        tagName: "div",
        className: "container",

        initialize: function () {
            this.brandNavigationView = new NavigationBrand({
                element: navigationData.brand
            });

            this.mainNavigationView = new NavigationMain({
                elements: navigationData.navigation
            });
        },

        render: function () {
            $(this.el).append(this.brandNavigationView.render().el);
            $(this.el).append(this.mainNavigationView.render().el);

            return this;
        }
    });

    return Navigation;
});