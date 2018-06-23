var fs = require('fs')
var express = require('express');
var app = express();

var five = require("johnny-five");
var board = new five.Board();

var web = require("./pi_go_web").web;

var motorA;
var motorB;
var motorC;
//var motorD;
var pin7;
var pin8;

const DEFAULT_SPEED=170;

var authorizedToken;

function token_is_valid(requestToken) {
    if (!requestToken) { 
        return false; 
    } else {
        if (requestToken == authorizedToken) {
            return true;
        } else {
            console.log(`Invalid token: '${requestToken}'. Expected: '${authorizedToken}'.`);
            return false;
        }
    };
}

app.get('/', function (req, res) {
    if (token_is_valid(req.query.token)) {
        responseHtml = '<html><body style="font-size:125%">'
           +'<p>PiGO prototype 3. It is ' + Date.now() + '</p>'
            +web.renderDriverTable(req.query.token)
            +'</body></html>';
    } else {
        responseHtml = '<html><body style="font-size:125%">'
            +'<p>PiGO prototype 3. It is ' + Date.now() + '</p>'
            +'<form action="/" method="get" style="font-size:200%">'
            +'Please enter token: <input type="text" name="token" value="PIGO">'
            +'<input type="submit" value="Submit">'
            +'</form>'
            +'</body></html>';
    }
    res.send(responseHtml);
})

app.get('/motorAfwd', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motorA.forward(speed);
    res.redirect('/?token='+req.query.token);
})

app.get('/motorAstop', function (req, res) {
   motorA.stop();
    res.redirect('/?token='+req.query.token);
})

app.get('/motorArev', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motorA.rev(speed);
    res.redirect('/?token='+req.query.token);
})

app.get('/motors-all-stop', function (req, res) {
   motorA.stop();
   motorB.stop();
   motorC.stop();
   //motorD.stop();
   pin7.low();
   pin8.low();
    res.redirect('/?token='+req.query.token);
})

app.get('/motorBfwd', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motorB.forward(speed);
    res.redirect('/?token='+req.query.token);
})

app.get('/motorBstop', function (req, res) {
   motorB.stop();
    res.redirect('/?token='+req.query.token);
})

app.get('/motorBrev', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motorB.rev(speed);
    res.redirect('/?token='+req.query.token);
})

app.get('/motorCfwd', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motorC.forward(speed);
    res.redirect('/?token='+req.query.token);
})

app.get('/motorCstop', function (req, res) {
   motorC.stop();
    res.redirect('/?token='+req.query.token);
})

app.get('/motorCrev', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   motorC.rev(speed);
    res.redirect('/?token='+req.query.token);
})

app.get('/motorDfwd', function (req, res) {
   pin7.low();
   pin8.high();
   res.redirect('/?token='+req.query.token);
})

app.get('/motorDstop', function (req, res) {
   //motorD.stop();
   pin7.low();
   pin8.low();
    res.redirect('/?token='+req.query.token);
})

app.get('/motorDrev', function (req, res) {
   var speed=(req.query.s ? req.query.s : DEFAULT_SPEED);
   pin7.high();
   pin8.low();
    res.redirect('/?token='+req.query.token);
})

var server = app.listen(8081, function () {
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

    // read authorizedToken
    fs.readFile('token', 'utf8', function (err,data) {
        if (err) {
            authorizedToken = 'PIGO';
            return console.log(err);
        } else {
            authorizedToken = data.trim();
            console.log(`Authorization token: '${authorizedToken}'.`);
        }
    });
});