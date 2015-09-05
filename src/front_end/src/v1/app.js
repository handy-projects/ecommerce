var express = require('express'),
app = express(),
port = process.env.PORT || 4321;

app.use(express.static(__dirname + '/'));
console.log('express server listenning on port: %d', port);
app.listen(port);
