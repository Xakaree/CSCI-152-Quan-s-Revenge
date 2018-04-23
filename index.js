var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var device = require('express-device');

var room = [];
var host = [];

function generateRoomCode() {
    var code = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (var i = 0; i < 5; i++)
    code += possible.charAt(Math.floor(Math.random() * possible.length));

    return code;
}

app.use(device.capture());

//

app.get('/', function(req, res){
  if(req.device.type == "desktop") {
    app.use(express.static(__dirname + '/public'));
    res.sendFile(__dirname + '/public/index.html');
  }
  else if(req.device.type == "phone") {
    app.use(express.static(__dirname + '/public/phone'));
    res.sendFile(__dirname + '/public/phone/index.html');
  }
});

io.on('connection', function(socket){
  console.log(socket.client.id + ' connected');

  socket.on('coderequest', function() {
    var code = generateRoomCode();
    console.log("new code: " + code);
    socket.join(code);
    host[code] = socket.id;
    io.to(socket.id).emit('code', code);
  });
  socket.on('tdown', function(input) {
    io.to(room[socket.id]).emit('hosttdown', socket.id, input);
  });
  socket.on('tup', function(input) {
    io.to(room[socket.id]).emit('hosttup', socket.id, input);
  });

  socket.on('join', function(code) {
    if(host[code])  {
      console.log("client joining " + code);
      io.to(socket.id).emit('accept');
      socket.join(code);
      room[socket.id] = code;
    }
    else {
      console.log("room doesn't exist");
      io.to(socket.id).emit('reject');
    }
  });
});

var port = 7778;
http.listen(port, function(){
  console.log('listening on *:' + port);
});