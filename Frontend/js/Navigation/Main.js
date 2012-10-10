define(["backbone", "underscore", "Navigation/Element"], function (Backbone, _, NavigationElement) {
    var Navigation = Backbone.View.extend({
        tagName: "ul",
        className: "nav",

        initialize: function () {
            var self = this;

            _.each(this.options.elements, function (el) {
                var view = new NavigationElement({
                    element: el
                });

                $(self.el).append(view.render().el);
            });

            this.render();
        },

        render: function () {
            return this;
        }
    });

    return Navigation;
});