var express = require('express');
var app = express();
app.use(express.static('dist'));
app.listen();
<<<<<<< HEAD
var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
=======
var server_port = process.env.YOUR_PORT || process.env.PORT || 3000 || 80;
>>>>>>> dad7d03972c8df5017526c0bc4e3656295d35b0d
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function () {
    console.log('Listening on port %d', server_port);
});
