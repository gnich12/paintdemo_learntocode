var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8000;

app.use(express.static('public'));

http.listen(port, function(){
	console.log('listening on ' + port);
});

io.on('connection', function(socket){

	console.log('A user connected!');

	socket.on('new line', function(data){
		console.log(data);
		socket.broadcast.emit('new line', data);
	});

	// socket.on('mousedown', function(data){
	// 	console.log(data);
	// 	socket.broadcast.emit('mousedown', data);
	// });
	
	// socket.on('mousemove', function(data){
	// 	console.log(data);
	// 	socket.broadcast.emit('mousemove', data);
	// });

});