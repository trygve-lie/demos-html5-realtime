## What?

These are small demos using two or more (browser) clients interacting with each other in real time. Most demos has a
remote and a receiver. The remote are used as a "remote control" to control whats going on on the receiver.
These demos does show some new and experimental parts in browsers using native implementations so each demo might
require different browser versions / experimental browser builds.


## Getting started

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
* The server should now be running at: __[http://localhost:8080/](http://localhost:8080/ "Demo server running at your local machine")__


## Enable WebSockets
Even if socket.io provides fallback solutions like WebSockets trough Flash or HTTP LongPolling the ideal situation are to
use native WebSockets in modern browsers. In writing WebSockets are implemented or available in most modern browsers but
due to a [security issue](http://www.ietf.org/mail-archive/web/hybi/current/msg04744.html "Adam Barth on the security issue in WebSockets")
disabled in some browsers:

#### Opera 11.xx (desktop) and Opera Mobile 11.xx:

In the address bar, write __opera:config__ and then go to __User Prefs__. Set __Enable WebSockets__ to __true__.

#### FireFox 4.x:
In the address bar, write __about:config__ and then set __network.websocket.enabled__ to __true__. Do also set to __network.websocket.override-security-block__
to __true__.

#### Chrome:
Should be enabled by default.

#### Safari 5.x:
Should be enabled by default.

#### IOS 4.2:
Should be enabled by default.

#### IE9:
IE have no support for WebSockets but the IE team has [released a prototype](http://html5labs.interoperabilitybridges.com/html5labs/prototypes/websockets/websockets/info/ "WebSocket prototype for IE")
which will extend IE with WebSockets.