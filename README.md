# What?

These are small demos using two or more (browser) clients interacting with each other in real time. Most demos have a
remote and a receiver. The remote is used as a "remote control" to control what's going on on the receiver.
These demos does show some new and experimental parts in browsers using native implementations so each demo might
require different browser versions / experimental browser builds.


## Getting started

For clients to communicate with each other most demos rely on a [WebSocket](http://dev.w3.org/html5/websockets/ "The WebSocket specification at W3C")
connection. Iow; a server is needed. These demos come with a very simple server which uses [socket.io](http://socket.io/ "Homepage of socket.io")
for WebSockets so [Node.js](http://nodejs.org/ "Homepage of Node.js") is needed.

Installation:

* Download and install [Node.js](http://nodejs.org/ "Homepage of Node.js") 4.x or later
* Install [npm](http://npmjs.org/ "Homepage of Node Package Manager")
* Install socket.io: __npm install socket.io__

Starting the server:

* In the demos-html5-realtime directory: __cd www__
* Start the server: __node server.js__
* The server should now be running at: __[http://localhost:8080/](http://localhost:8080/ "Demo server running at your local machine")__


## Enable WebSockets
Even if socket.io provides fallback solutions like WebSockets trough Flash or HTTP LongPolling the ideal situation is to
use native WebSockets in modern browsers. At the time of writing, WebSockets are implemented or available in most modern browsers but
due to a [security issue](http://www.ietf.org/mail-archive/web/hybi/current/msg04744.html "Adam Barth on the security issue in WebSockets")
they are disabled in some browsers:

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
IE has no support for WebSockets but the IE team has [released a prototype](http://html5labs.interoperabilitybridges.com/html5labs/prototypes/websockets/websockets/info/ "WebSocket prototype for IE")
which will extend IE with WebSockets.


## Enable Device APIs
Different Device APIs are fairly new and just starting to occur in browsers. Some of these demos rely on beta and lab
releases so do expect specific browser versions to run some of these demos. Please see the description of each demo if
any specific browsers or configuration has to be used or performed.

### Opera Mobile for Android Lab Release
Opera has a Lab release of Opera Mobile for Android which enables native web camera access and orientation events. The release
and how to install it can be found at [Opera Core Concerns](http://my.opera.com/core/blog/2011/03/23/webcam-orientation-preview "Article on how to install and use Opera Mobile Lab Release with device APIs").


## Demos

These are the current demos:

### Demo I - Simple chat:
A very simple chat client just passing messages between attached clients. Should be able to run in all WebSocket enabled
browsers.

### Demo II - Instant Camera:
A remote / receiver demo based on access to the camera on the device. The remote will display the video from the camera
in a HTML5 video tag on the device which acts as a remote. A snapshot can then be taken on the remote device by clicking
on the video and the snapshot will instantly be transferred to the receiver and displayed.

Screencast: [http://www.youtube.com/watch?v=jqXo-AEVhK4](http://www.youtube.com/watch?v=jqXo-AEVhK4 "Screen cast of the demo on YouTube")

NOTE I: This demo requires the Opera Mobile Android Lab Release which gains native access to the web camera. WebSockets must
be enabled as described above in this document.

NOTE II: To be able to grab a image from the video stream and transfer it over the wire a security change must be applied
to the browser. In the address bar, write __opera:config__, select __Security Prefs__ and set __Allow Camera to Canvas Copy__.

### Demo III - Remote Rotation:
A remote / receiver demo based on orientation events in a device. The remote will capture the orientation events from a
device and transfer these over a WebSocket to the receiver and create a rotating image in the receiver. The image in the
receiver will rotate depending upon how the remote is rotated.

Screencast: [http://www.youtube.com/watch?v=x2T4BJwPRnQ](http://www.youtube.com/watch?v=x2T4BJwPRnQ "Screen cast of the demo on YouTube")

NOTE: This demo requires the Opera Mobile Android Lab Release which gains native access to orientation events. WebSockets
must be enabled as described above in this document.

### Demo IV - TV Remote:
A remote / receiver demo where a remote (handheld) device with touch events control playback, volume and switching between
videos on a receiving device. Touch and click events are captured on the remote device and transferred trough a WebSocket
to the receiving device.

Click the screen on the remote to start and stop playback. Swipe up to increase the volume. Swipe down to decrease the volume.
Swipe to the right to switch to the next video and swipe to the left to switch to the previous video.

Screencast: [http://www.youtube.com/watch?v=3e18_qX8vok](http://www.youtube.com/watch?v=3e18_qX8vok "Screen cast of the demo on YouTube")

NOTE: This demo requires a device with touch events to act as a remote. The receiver must be able to play HTML5 video and
have support for Ogg Theora. Both devices need WebSockets enabled.