var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs'),
    util = require('util'),
    WebSocketServer = require('ws').Server,
    clients = [];



// Simplest HTTP server eva!
var httpServer = http.createServer( function ( request, response ){

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



// Broadcast message to all clients except source client

function broadcast ( client, message ) {
    var i = clients.length;
    while ( i-- ) {
        if ( clients[ i ] !== client ) {
            clients[ i ].send( message );
        }
    }
}



// Remove a client from the client pool

function removeClient ( client ) {
    var i = clients.indexOf( client );
    if (i !== -1) {
        clients.splice(i, 1);
    }
}



// Simple WebSocket broadcast server

var wss = new WebSocketServer( { server :  httpServer } );

wss.on('connection', function ( ws ) {

    clients.push( ws );

    ws.send( JSON.stringify(
        {demo : {
            type  : "info"
        } }
    ));

    ws.on('message',function ( message ) {
        broadcast( ws, message );
    });

    ws.on('close', function () {
        removeClient( ws );
    });

    ws.on('error', function () {
        removeClient( ws );
    });
});


httpServer.listen( process.argv[2] ? process.argv[2] : 8080 );
console.log('Server running at port:', process.argv[2] ? process.argv[2] : 8080 );
