
// This project is inspired on https://www.hakantuncer.com/2016/09/07/creating-an-online-quiz-game-using-node-dot-js/
// author Jowolo - jow88s@gmail.com


var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 80;

//////

var HID = require('node-hid');
var BitMask = require('bit-mask');
var BitArray = require('node-bitarray');
var bitwise = require('bitwise');

//var app = express();
var router = express.Router();
var path = __dirname + '/';

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});


//////////////

var devices = HID.devices();
var deviceInfo = devices.find( function(d) {
    var isBuzz = d.vendorId===0x054C && d.productId===0x1000;
	if (isBuzz)
		console.log("we found buzz controllers!");
	return isBuzz;
    //return isTeensy && d.usagePage===0xFFAB && d.usage===0x200;
});

var device = null;
if( deviceInfo ) {
   device = new HID.HID( deviceInfo.path );
  // ... use device
}

//var device = new HID.HID("USB_054c_1000_14200000");
//var device = new HID.HID("USB_054c_1000"); // not working

device.on("data", function(data) {
    SendEventForController1(data);
    SendEventForController2(data);
    SendEventForController3(data);
    SendEventForController4(data);
});

function SendEventForController1(data){
    var byte1 = bitwise.readByte(data[4]);
    var byte2 = bitwise.readByte(data[3]);

    var numberOfButtonsPressed = 0;
    var buttonId = 0;

    if (byte2[0]){
        numberOfButtonsPressed++;
        buttonId = 0;
    }

    if (byte1[4]){
        numberOfButtonsPressed++;
        buttonId = 1;
    }

    if (byte1[5]){
        numberOfButtonsPressed++;
        buttonId = 2;
    }

    if (byte1[6]){
        numberOfButtonsPressed++;
        buttonId = 3;
    }

    if (byte1[7]){
        numberOfButtonsPressed++;
        buttonId = 4;
    }

    if (numberOfButtonsPressed === 1){
        Emit(1, buttonId);
    }
}

function SendEventForController2(data){
    var byte = bitwise.readByte(data[3]);

    var numberOfButtonsPressed = 0;
    var buttonId = 0;

    if (byte[1]){
        numberOfButtonsPressed++;
        buttonId = 1;
    }

    if (byte[2]){
        numberOfButtonsPressed++;
        buttonId = 2;
    }

    if (byte[3]){
        numberOfButtonsPressed++;
        buttonId = 3;
    }

    if (byte[4]){
        numberOfButtonsPressed++;
        buttonId = 4;
    }

    if (byte[5]){
        numberOfButtonsPressed++;
        buttonId = 0;
    }

    if (numberOfButtonsPressed === 1){
        Emit(2, buttonId);
    }
}

function SendEventForController3(data){
    var byte1 = bitwise.readByte(data[3]);
    var byte2 = bitwise.readByte(data[2]);

    var numberOfButtonsPressed = 0;
    var buttonId = 0;

    if (byte1[6]){
        numberOfButtonsPressed++;
        buttonId = 1;
    }

    if (byte1[7]){
        numberOfButtonsPressed++;
        buttonId = 2;
    }

    if (byte2[0]){
        numberOfButtonsPressed++;
        buttonId = 3;
    }

    if (byte2[1]){
        numberOfButtonsPressed++;
        buttonId = 4;
    }

    if (byte2[2]){
        numberOfButtonsPressed++;
        buttonId = 0;
    }

    if (numberOfButtonsPressed === 1){
        Emit(3, buttonId);
    }
}

function SendEventForController4(data){
    var byte = bitwise.readByte(data[2]);

    var numberOfButtonsPressed = 0;
    var buttonId = 0;

    if (byte[3]){
        numberOfButtonsPressed++;
        buttonId = 1;
    }

    if (byte[4]){
        numberOfButtonsPressed++;
        buttonId = 2;
    }

    if (byte[5]){
        numberOfButtonsPressed++;
        buttonId = 3;
    }

    if (byte[6]){
        numberOfButtonsPressed++;
        buttonId = 4;
    }

    if (byte[7]){
        numberOfButtonsPressed++;
        buttonId = 0;
    }

    if (numberOfButtonsPressed === 1){
        Emit(4, buttonId);
    }
}

function Emit(controllerId, buttonId){
	//console.log("emit from controllerId=" + controllerId + " buttonId="+buttonId);
    //socket.emit('buzz-clicked', { "ControllerId": controllerId, "ButtonId": buttonId });
	io.emit('buzz-clicked', { "ControllerId": controllerId, "ButtonId": buttonId });
}