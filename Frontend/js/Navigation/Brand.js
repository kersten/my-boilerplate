define(["jquery", "backbone"], function ($, Backbone, _, navigationData) {
    var Navigation = Backbone.View.extend({
        tagName: "a",
        className: "brand",

        events: {
            "click": "navigate"
        },

        initialize: function () {
            this.el.html = this.options.element.name;
        },

        navigate: function (e) {
            Backbone.history.navigate($(e.currentTarget).attr('href').slice(1), true);

            return false;
        },

        render: function () {
            var item;

            if (this.options.element.img) {
                item = $("<img></img>").attr({
                    src: this.options.element.img,
                    "data-retina": this.options.element.retina
                });
            } else {
                item = this.options.element.name;
            }

            $(this.el).attr({
                href: this.options.element.link
            }).html(item);

            $("img", this.el).retina();

            return this;
        }
    });

    return Navigation;
});