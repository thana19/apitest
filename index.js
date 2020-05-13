var express = require("express");
var app = express();
var port = 4000;

app.get("/", (req, res) => {
    res.send({
        id: "001",
        name: "thana",
        status: "200"
    });
});

app.listen(port, () => {
    console.log('server listening on port ${port}');
});