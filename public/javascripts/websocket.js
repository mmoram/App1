$(function() {

	window.WebSocket = window.WebSocket;

	var websocket;

    $("#generate").click(function() {
        //generate 10 random person on map displayed area
        //generate 20 random scooter position on map area
        //send data to server        
        var json_msg = {
            "type" : "command",
            "data" : "start"
        };

        websocket.send(JSON.stringify(json_msg));

    });
    $("#exterminate").click(function() {
        //stop simulation
                
        var json_msg = {
            "type" : "command",
            "data" : "stop"
        };

        websocket.send(JSON.stringify(json_msg));

    });
});