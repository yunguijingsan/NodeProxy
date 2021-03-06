var express = require('express');
var querystring = require('querystring');
var http = require('http');
var bodyParser = require('body-parser');
var is   = require('type-is');
var iconv = require('iconv-lite');

var app = express();


app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('etag');
app.use(express.static(__dirname + '/public'));


var fs = require("fs")
var port = 8081;
var count = 0;
app.use(function(req,res){
    console.log(req.header("Host")+"\t"+req.header("X-Real-IP")+" "+count);
    res.send('from : ' +port +" " + count++);
})

var server = app.listen(port, function() {
    console.log('Express server listening on port ' + server.address().port);
});
