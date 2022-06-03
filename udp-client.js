let dgram = require('dgram');

let s = dgram.createSocket('udp4');

s.send(Buffer.from("Hello from Sam's UDP Comm.."), 8080, 'localhost')