//Import the mongoose module
var mongoose = require('mongoose');
//websocket
var webSocketServer = require('websocket').server;
var http = require('http');
var webSocketsServerPort = 30000;

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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
				generatePeople(10);
				generateScooters(20);
				

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


