/**
 * Created with JetBrains PhpStorm.
 * User: kerstenburkhardt
 * Date: 09.10.12
 * Time: 22:04
 * To change this template use File | Settings | File Templates.
 */

var fs = require("fs"),
    express = require("express"),
    app = express(),
    engines = require("consolidate"),
    lessMiddleware = require("less-middleware");

app.configure(function () {
    app.set("title", "myBoilerplate");

    this.use(lessMiddleware({
        src: __dirname + "/less",
        dest: __dirname + "/../Frontend/css",
        prefix: "/css",
        compress: true,
        debug: true
    }));

    app.use("/js", express.static(__dirname + "/../Frontend/js"));
    app.use("/components", express.static(__dirname + "/../components"));
    app.use("/bootstrap", express.static(__dirname + "/../node_modules/bootstrap/js"));

    app.use("/css", express.static(__dirname + "/../Frontend/css"));
    app.use("/img", express.static(__dirname + "/../Frontend/img"));

    app.engine(".mustache", engines.hogan);

    app.set("view engine", "mustache");
    app.set("views", __dirname + "/../Frontend/views");
});

app.get("/j/navigation", function (req, res) {
    res.set("Content-Type", "application/json");
    res.end(fs.readFileSync(__dirname + "/data/navigation.json").toString());
});

app.get(/^\/template\/(.*?)$/, function (req, res) {
    res.render(req.params[0]);
});

app.get("/*", function (req, res) {
    res.render("index", {
        title: app.get("title")
    });
});

app.listen(process.env.PORT || 3000);