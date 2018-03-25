$(function() {

	window.WebSocket = window.WebSocket;

	var websocket;

    $("#generate").click(function() {
       //map boundaries
       var map = document.getElementById("map");
       var bounds = map.getBounds();
       var minlat = bounds.getSouthWest().lat();
       var maxlat = bounds.getNortEast().lat();
       var minlng = bounds.getSouthWest().lng();
       var maxlng = bounds.getNortEast().lng();
        //send data to server        
        var json_msg = {
            "type" : "command",
            "data" : "start",
            "min_lat" : minlat,
            "max_lat" : maxlat,
            "min_lng" : minlng,
            "max_lng" : maxlng
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