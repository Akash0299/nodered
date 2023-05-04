var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var textParser = bodyParser.text({type: '*/*'})

var length = 0;
// GET
app.get('/api/length', function (req, res) {
res.send(length);
})

//PUT
app.put('/api/length', textParser, function (req, res) {
length = req.body;
res.send(length);
})

var server = app.listen(5000, 'localhost', function () {
var host = server.address().address
var port = server.address().port
console.log("Server listening at http://%s:%s", host, port)
})
