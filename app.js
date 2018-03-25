var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var webSocketsServerPort = 30000;

var webSocketServer = require('websocket').server;
var http = require('http');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var server = http.createServer(function(request, response) {
	// Not important We're writing WebSocket server, not HTTP server
	/*
	 response.writeHeader(200, {
	 "Content-Type" : "text/html"
	 });
	 response.write('<head><meta http-equiv="refresh" content="1"></head>' + '<body>' + '<h1>Visualization client</h1><br>' + '<p>Timestamp: ' + time + '</p>' + '<p>Transmitted packets: ' + txp + '</p>' + '<p>Received packets: ' + rxp + '</p>' + '<p>Transmitted bytes: ' + txb + '</p>' + '<p>Received bytes: ' + rxb + '</p>' + '<p>Average packet size: ' + avg_pkt_size + '</p>' + '<p>Average inter-packet delay: ' + avg_pkt_delay + '</p>' + '</body>');
	 response.end();
	 */
});

server.listen(webSocketsServerPort, function() {
	console.log((new Date()) + "\nServer is listening on port " + webSocketsServerPort);
});

/**
 * WebSocket server
 */
var wsServer = new webSocketServer({
	// WebSocket server is tied to a HTTP server. WebSocket request is just
	// an enhanced HTTP request. For more info http://tools.ietf.org/html/rfc6455#page-6
	httpServer : server
});
wsServer.on('request', function(request) {
	
		console.log(">> Message received.");
		//console.log("message=>" + message.data+"<");

		//parse the received message
		var jsonrx = JSON.parse(message["utf8Data"]);
		
		if (jsonrx["type"] == "command") {

			if (jsonrx["data"] == "start") {
			  //generate positions, store in database

				

      }

			if (jsonrx["data"] == "stop") {
			  //delete all entries on DB

				

      }
    }
  });
function generatePeople(n) {
//generate n people and add to the database at current map view
  for (i=1; i<n; i++){

  }
}
function generateScooters(n) {
  //generate n scooters and add to the database at current map view
    for (i=1; i<n; i++){
  
    }
}
