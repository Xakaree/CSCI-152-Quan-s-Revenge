var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var device = require('express-device');

app.use(device.capture());

//

app.get('/', function(req, res){
  console.log(req.device.type);
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
  socket.join('room01');
  socket.on('tdown', function(input) {
    io.emit('hosttdown', socket.id, input);
  });
  socket.on('tup', function(input) {
    io.emit('hosttup', socket.id, input);
  });
});

var port = 7778;
http.listen(port, function(){
  console.log('listening on *:' + port);
});