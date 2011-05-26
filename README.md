# What?

These are small demos using two or more (browser) clients interacting with each other in real time. Most demos has a
remote and a receiver. The remote are used as a "remote control" to control whats going on on the receiver.
These demos does show some new and experimental parts in browsers using native implementations so each demo might
require different browser versions / experimental browser builds.

- - -

# Getting started

For clients to communicate with each other most demos rely on a [WebSocket](http://dev.w3.org/html5/websockets/ "The WebSocket specification at W3C")
connection. Iow; a server is needed. These demos comes with a very simple server which use [socket.io](http://socket.io/ "Homepage of socket.io")
for WebSockets so [Node.js](http://nodejs.org/ "Homepage of Node.js") is needed.

Installation:

* Download and install [Node.js](http://nodejs.org/ "Homepage of Node.js") 4.x or never
* Install [npm](http://npmjs.org/ "Homepage of Node Package Manager")
* Install socket.io: __npm install socket.io__

Starting the server:

* In the demos-html5-realtime directory: __cd www__
* Start the server: __node server.js__
* The server should now be running at: __http://localhost:8080/___
