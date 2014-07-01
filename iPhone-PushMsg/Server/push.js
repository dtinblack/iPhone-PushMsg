var zmq = require('zmq')
, sock = zmq.socket('push');

sock.bindSync('tcp://127.0.0.1:3001');
console.log('Push bound to port 3001');

setInterval(function(){
            console.log('sending message');
            sock.send('push js: msg');
}, 5000);