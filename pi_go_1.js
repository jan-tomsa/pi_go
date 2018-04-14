var express = require('express');
var app = express();

var five = require("johnny-five");
var board = new five.Board();

var motor1;
var motor2;

const DEFAULT_SPEED=200;

const DRIVER_GUI_ROW_FWD_MAX = ''
           +'<tr>'
             +'<td><a href="/motor1fwd?s=255">Motor 1 fwd MAX</a></td>'
             +'<td><a href="/motors-12-fwd?s=255">Motors 1+2 fwd MAX</a></td>'
             +'<td><a href="/motor2fwd?s=255">Motor 2 fwd MAX</a></td>'
           +'</tr>';

const DRIVER_GUI_ROW_FWD = ''
           +'<tr>'
             +'<td><a href="/motor1fwd">Motor 1 forward</a></td>'
             +'<td><a href="/motors-12-fwd">Motors 1+2 forward</a></td>'
             +'<td><a href="/motor2fwd">Motor 2 forward</a></td>'
           +'</tr>';

const DRIVER_GUI_ROW_STOP = ''
           +'<tr>'
             +'<td><a href="/motor1stop">Motor 1 stop</a></td>'
             +'<td><a href="/motors-12-stop">Motors 1+2 stop</a></td>'
             +'<td><a href="/motor2stop">Motor 2 stop</a></td>'
           +'</tr>';

const DRIVER_GUI_ROW_REV = ''
           +'<tr>'
             +'<td><a href="/motor1rev">Motor 1 reverse</a></td>'
             +'<td><a href="/motors-12-rev">Motors 1+2 reverse</a></td>'
             +'<td><a href="/motor2rev">Motor 2 reverse</a></td>'
           +'</tr>';

const DRIVER_GUI_ROW_REV_MAX = ''
           +'<tr>'
             +'<td><a href="/motor1rev?s=255">Motor 1 rev MAX</a></td>'
             +'<td><a href="/motors-12-rev?s=255">Motors 1+2 rev MAX</a></td>'
             +'<td><a href="/motor2rev?s=255">Motor 2 rev MAX</a></td>'
           +'</tr>';

const DRIVER_GUI_TABLE = ''
           +'<table cellpadding="5" style="font-size:200%" border="1">'
           +DRIVER_GUI_ROW_FWD_MAX
           +DRIVER_GUI_ROW_FWD
           +DRIVER_GUI_ROW_STOP
           +DRIVER_GUI_ROW_REV
           +DRIVER_GUI_ROW_REV_MAX
           +'</table>';

const DRIVER_GUI_TABLE_INVERTED = ''
           +'<table cellpadding="5" style="font-size:200%" border="1">'
           +DRIVER_GUI_ROW_REV_MAX
           +DRIVER_GUI_ROW_REV
           +DRIVER_GUI_ROW_STOP
           +DRIVER_GUI_ROW_FWD
           +DRIVER_GUI_ROW_FWD_MAX
           +'</table>';

app.get('/', function (req, res) {
   res.send('<html><body style="font-size:125%">'
           +'<p>PiGO prototype 2. It is ' + Date.now() + '</p>'
	   +DRIVER_GUI_TABLE_INVERTED
           +'</body></html>');
})

app.get('/motor1fwd', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motor1.forward(speed);
   res.redirect('/');
})

app.get('/motor1stop', function (req, res) {
   motor1.stop();
   res.redirect('/');
})

app.get('/motor1rev', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motor1.rev(speed);
   res.redirect('/');
})

app.get('/motors-12-fwd', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motor1.forward(speed);
   motor2.forward(speed);
   res.redirect('/');
})

app.get('/motors-12-stop', function (req, res) {
   motor1.stop();
   motor2.stop();
   res.redirect('/');
})

app.get('/motors-12-rev', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motor1.rev(speed);
   motor2.rev(speed);
   res.redirect('/');
})

app.get('/motor2fwd', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motor2.forward(speed);
   res.redirect('/');
})

app.get('/motor2stop', function (req, res) {
   motor2.stop();
   res.redirect('/');
})

app.get('/motor2rev', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motor2.rev(speed);
   res.redirect('/');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})


board.on("ready", function() {
  motor1 = new five.Motor({pins:[5,6], invertPWM:true});
  motor2 = new five.Motor({pins:[10,11], invertPWM:true});

  //motor1.forward(255);
  //motor2.forward(255);
});

