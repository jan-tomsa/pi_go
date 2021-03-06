var express = require('express');
var app = express();

var five = require("johnny-five");
var board = new five.Board();

var motorA;
var motorB;
var motorC;
var motorD;

const DEFAULT_SPEED=170;

const DRIVER_GUI_ROW_FWD_MAX = ''
           +'<tr>'
             +'<td><a href="/motorAfwd?s=255">Motor A fwd MAX</a></td>'
             +'<td><a href="/motorBfwd?s=255">Motor B fwd MAX</a></td>'
             +'<td><a href="/motorCfwd?s=255">Motor C fwd MAX</a></td>'
             +'<td><a href="/motorDfwd?s=255">Motor D fwd MAX</a></td>'
           +'</tr>';

const DRIVER_GUI_ROW_FWD = ''
           +'<tr>'
             +'<td><a href="/motorAfwd">Motor A forward</a></td>'
             +'<td><a href="/motorBfwd">Motor B forward</a></td>'
             +'<td><a href="/motorCfwd">Motor C forward</a></td>'
             +'<td><a href="/motorDfwd">Motor D forward</a></td>'
           +'</tr>';

const DRIVER_GUI_ROW_STOP = ''
           +'<tr>'
             +'<td><a href="/motorAstop">Motor A stop</a></td>'
             +'<td><a href="/motorBstop">Motor B stop</a></td>'
             +'<td><a href="/motorCstop">Motor C stop</a></td>'
             +'<td><a href="/motorDstop">Motor D stop</a></td>'
           +'</tr>';

const DRIVER_GUI_ROW_STOP_ALL = ''
           +'<tr>'
             +'<td colspan="4" align="center"><a href="/motors-all-stop">STOP ALL Motors</a></td>'
           +'</tr>';

const DRIVER_GUI_ROW_REV = ''
           +'<tr>'
             +'<td><a href="/motorArev">Motor A reverse</a></td>'
             +'<td><a href="/motorBrev">Motor B reverse</a></td>'
             +'<td><a href="/motorCrev">Motor C reverse</a></td>'
             +'<td><a href="/motorDrev">Motor D reverse</a></td>'
           +'</tr>';

const DRIVER_GUI_ROW_REV_MAX = ''
           +'<tr>'
             +'<td><a href="/motorArev?s=255">Motor A rev MAX</a></td>'
             +'<td><a href="/motorBrev?s=255">Motor B rev MAX</a></td>'
             +'<td><a href="/motorCrev?s=255">Motor C rev MAX</a></td>'
             +'<td><a href="/motorDrev?s=255">Motor D rev MAX</a></td>'
           +'</tr>';

const DRIVER_GUI_TABLE = ''
           +'<table cellpadding="5" style="font-size:150%" border="1">'
           +DRIVER_GUI_ROW_FWD_MAX
           +DRIVER_GUI_ROW_FWD
           +DRIVER_GUI_ROW_STOP
           +DRIVER_GUI_ROW_STOP_ALL
           +DRIVER_GUI_ROW_REV
           +DRIVER_GUI_ROW_REV_MAX
           +'</table>';

const DRIVER_GUI_TABLE_INVERTED = ''
           +'<table cellpadding="5" style="font-size:150%" border="1">'
           +DRIVER_GUI_ROW_REV_MAX
           +DRIVER_GUI_ROW_REV
           +DRIVER_GUI_ROW_STOP
           +DRIVER_GUI_ROW_STOP_ALL
           +DRIVER_GUI_ROW_FWD
           +DRIVER_GUI_ROW_FWD_MAX
           +'</table>';

app.get('/', function (req, res) {
   res.send('<html><body style="font-size:125%">'
           +'<p>PiGO prototype 2. It is ' + Date.now() + '</p>'
	   +DRIVER_GUI_TABLE
           +'</body></html>');
})

app.get('/motorAfwd', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motorA.forward(speed);
   //console.log('motorAfwd');
   res.redirect('/');
})

app.get('/motorAstop', function (req, res) {
   motorA.stop();
   //console.log('motorAstop');
   res.redirect('/');
})

app.get('/motorArev', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motorA.rev(speed);
   //console.log('motorArev');
   res.redirect('/');
})

app.get('/motors-all-stop', function (req, res) {
   motorA.stop();
   motorB.stop();
   motorC.stop();
   motorD.stop();
   res.redirect('/');
})

app.get('/motorBfwd', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motorB.forward(speed);
   res.redirect('/');
})

app.get('/motorBstop', function (req, res) {
   motorB.stop();
   res.redirect('/');
})

app.get('/motorBrev', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motorB.rev(speed);
   res.redirect('/');
})

app.get('/motorCfwd', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motorC.forward(speed);
   res.redirect('/');
})

app.get('/motorCstop', function (req, res) {
   motorC.stop();
   res.redirect('/');
})

app.get('/motorCrev', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motorC.rev(speed);
   res.redirect('/');
})

app.get('/motorDfwd', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motorD.forward(speed);
   res.redirect('/');
})

app.get('/motorDstop', function (req, res) {
   motorD.stop();
   res.redirect('/');
})

app.get('/motorDrev', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motorD.rev(speed);
   res.redirect('/');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("PiGO web app listening at http://%s:%s", host, port)
})


board.on("ready", function() {
  motorA = new five.Motor({pins:[5,6], invertPWM:true});
  motorB = new five.Motor({pins:[10,11], invertPWM:true});
  motorC = new five.Motor({pins:[3,9], invertPWM:true});
  motorD = new five.Motor({pins:[7,8], invertPWM:true});

  //motorA.forward(255);
  //motorB.forward(255);
});

