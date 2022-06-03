let dgram = require('dgram');

let server = dgram.createSocket('udp4');

server.on('message', function (msg, rinfo){
    console.log('I received this message from the client: ' + msg);
});

server.bind(8080)
