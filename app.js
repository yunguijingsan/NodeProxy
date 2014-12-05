var express = require('express');
var querystring = require('querystring');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();

var proxyServer = "localhost";
var proxyDomain = "";
var proxyServerPort = 8080;

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));
app.disable('etag');
app.use(express.static(__dirname + '/public'));


app.use(function (req, res) {
    console.log(req.url);
    if (req.method.toUpperCase() == "GET") {
        getProxy(req,res);
    } else if (req.method.toUpperCase() == "POST") {
        postProxy(req,res);
    }
})
function getProxy(req, res) {
    var proxyPath = req.url;
    var data = querystring.stringify(req.query);

    var opt = {
        method: "GET",
        host: proxyServer,
        port: proxyServerPort,
        path: proxyDomain + proxyPath,
        headers: {
            "Content-Type": 'text/plain',
            "X-Real-IP": req.ip
        }
    };

    var req_proxy = http.request(opt, function (serverFeedback) {
        var body = "";
        serverFeedback.on('data', function (data) {
            body += data;
        })
            .on('end', function () {
                res.set('Pragma', 'no-cache');
                res.set('Cache-Control', 'no-cache');
                res.set('Expires', '0');
                res.set('Content-Type', 'application/json');
                res.status(serverFeedback.statusCode).send(body);
            });
    });
    req_proxy.end();
}
function postProxy(req, res) {
    var proxyPath = req.url;
    var data = querystring.stringify(req.body);

    var opt = {
        method: "POST",
        host: proxyServer,
        port: proxyServerPort,
        path: proxyDomain + proxyPath + "?" + data,
        headers: {
            "Content-Type": 'text/plain',
            "X-Real-IP": req.ip
        }
    };

    var req_proxy = http.request(opt, function (serverFeedback) {
        var body = "";
        serverFeedback.on('data', function (data) {
            body += data;
        })
            .on('end', function () {
                res.set('Pragma', 'no-cache');
                res.set('Cache-Control', 'no-cache');
                res.set('Expires', '0');
                res.set('Content-Type', 'application/json');
                res.status(serverFeedback.statusCode).send(body);
            });
    });
    req_proxy.end();
}
var server = app.listen(3000, function() {
    console.log('Express server listening on port ' + server.address().port);
});
