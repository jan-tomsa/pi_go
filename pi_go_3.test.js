var express = require('express');
var app = express();

var five = require("./fakes/johnny-five");
var board = new five.Board();

var web = require("./pi_go_web").web;

var motorA;
var motorB;
var motorC;
//var motorD;
var pin7;
var pin8;

const DEFAULT_SPEED=170;

app.get('/', function (req, res) {
    responseHtml = '<html><body style="font-size:125%">'
        +'<p>PiGO prototype 3. It is ' + Date.now() + '</p>'
        +web.renderDriverTable()
        +'</body></html>';
    res.send(responseHtml);
})

app.get('/motorAfwd', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motorA.forward(speed);
   res.redirect('/');
})

app.get('/motorAstop', function (req, res) {
   motorA.stop();
   res.redirect('/');
})

app.get('/motorArev', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motorA.rev(speed);
   res.redirect('/');
})

app.get('/motors-all-stop', function (req, res) {
   motorA.stop();
   motorB.stop();
   motorC.stop();
   //motorD.stop();
   pin7.low();
   pin8.low();
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
   pin7.low();
   pin8.high();
   res.redirect('/');
})

app.get('/motorDstop', function (req, res) {
   //motorD.stop();
   pin7.low();
   pin8.low();
   res.redirect('/');
})

app.get('/motorDrev', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   pin7.high();
   pin8.low();
   res.redirect('/');
})

var server = app.listen(8082, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("PiGO web app (robotic arm edition) listening at http://%s:%s", host, port)
})


board.on("ready", function() {
  motorA = new five.Motor({pins:[5,6], invertPWM:true});
  motorB = new five.Motor({pins:[10,11], invertPWM:true});
  motorC = new five.Motor({pins:[3,9], invertPWM:true});
  //motorD = new five.Motor({pins:[7,8], invertPWM:true});

  pin7 = new five.Pin(7);
  pin8 = new five.Pin(8);
});

