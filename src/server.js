var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var sys = require('sys');
var io = require('socket.io');


// Simplest HTTP server eva!
server = http.createServer( function ( request, response ){

    var uri = url.parse(request.url).pathname;
    var filepath = "www" + uri;
    if (filepath.substring(filepath.length - 1) === '/') {
        filepath  += 'index.html';
    }

    path.exists(filepath, function ( ex ) {

        if (!ex) {
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.write("404 - File not found: " + uri);
            response.end();
            return;
        }

        fs.readFile(filepath, "binary", function ( error, filecontent ) {

            if (error) {
                response.writeHead(500, {'Content-Type': 'text/html'});
                response.write("500 - Could not read " + filepath + " from file system!");
                response.end();
                return;
            }

            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(filecontent, "binary");
            response.end();
        });

    });

});
server.listen(8080);


// Even simpler websocket server
var socket = io.listen(server);
socket.on('connection', function ( client ) {
    client.on('message', function ( message ) {
        client.broadcast( message );
    });
});