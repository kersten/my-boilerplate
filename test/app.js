var myBoilterplate = require(__dirname + "/../index");

myBoilterplate.enable("debug");

myBoilterplate.addRoute('/*', "GET", function (req, res) {
    res.send("Hello World");
});

myBoilterplate.start(3000);