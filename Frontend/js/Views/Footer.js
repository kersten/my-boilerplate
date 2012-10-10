define(["backbone", "text!/../template/footer"], function (Backbone, template) {
    var Footer = Backbone.View.extend({
        events: {
            'click a': 'navigate'
        },

        navigate: function (e) {
            Backbone.history.navigate($(e.currentTarget).data("navigate"), true);

            $(".nav > li.active").removeClass("active");
        },

        render: function () {
            $(this.el).html(template);
            return this;
        }
    });

    return Footer;
});