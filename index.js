require('dotenv').config();
var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');

const APP_SECRET = process.env.APP_SECRET;
const VALIDATION_TOKEN = process.env.VALIDATION_TOKEN;
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
var server = http.createServer(app);

// use router
app.use('/', require("./src/router"));

app.set('port', process.env.PORT || 5000);
app.set('ip', process.env.IP || "0.0.0.0");

server.listen(app.get('port'), app.get('ip'), function() {
    console.log("Chat bot server listening at %s:%d ", app.get('ip'), app.get('port'));
});
