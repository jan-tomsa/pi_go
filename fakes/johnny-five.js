//exports.Board = {}

exports.Board = function() {
    console.log("Initiating Board");
};

exports.Board.prototype = {
    on: function(eventName,fn) { 
        console.log("Board on '"+eventName+"'"); 
        fn(); 
    }
};

exports.Motor = function(motoParams) {}

exports.Motor.prototype = {
    pins : [],
    invertPWM:true,
    forward: function(speed) {
        console.log("Motor forward '"+speed+"'");
    },
    stop: function() {
        console.log("Motor stop");
    }
}

exports.Pin = function() {};

exports.Pin.prototype = {
    low : function() {
        console.log("Pin LOW");
    },
    high : function() {
        console.log("Pin HIGH");
    }
}
