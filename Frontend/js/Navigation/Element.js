define(["backbone", "underscore"], function (Backbone, _) {
    var Navigation = Backbone.View.extend({
        tagName: "li",

        events: {
            "click a": "navigate"
        },

        initialize: function () {
            var subnavi;

            if (this.options.element.sub !== undefined && this.options.element.sub.length != 0) {
                $(this.el).addClass("dropdown");

                $(this.el).append($("<a></a>").attr({
                    "data-toggle": "dropdown"
                }).css({
                    cursor: "pointer"
                }).addClass("dropdown-toggle").html(this.options.element.name + "<b class=\"caret\">"));

                subnavi = $("<ul></ul>").addClass("dropdown-menu");

                _.each(this.options.element.sub, function (subEl) {
                    $(subnavi).append($("<a></a>").attr({
                        "data-navigate": subEl.link
                    }).css({
                        cursor: "pointer"
                    }).html(subEl.name));
                });

                $(this.el).append(subnavi);
            } else {
                $(this.el).append($("<a></a>").attr({
                    "data-navigate": this.options.element.link
                }).css({
                    cursor: "pointer"
                }).html(this.options.element.name));
            }

            this.render();
        },

        navigate: function (e) {
            if ($(e.currentTarget).parent().find("ul.dropdown-menu").length != 0) {
                return;
            }

            Backbone.history.navigate($(e.currentTarget).data("navigate"), true);

            $(this.el).parent().find('.active').removeClass("active");
            $(this.el).addClass("active");

            return;
        },

        render: function () {
            return this;
        }
    });

    return Navigation;
});