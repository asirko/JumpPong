const app = require('express')();
const http = require('http').Server(app/*, {path: '/socket'}*/);
const io = require('socket.io')(http);

// define APIs
require('./route')(app);

app.use((req, res, next) => {
  console.log('middleware');
  next();
});

// define Sockets
require('./socket')(io);

app.listen(3000, function () {
  console.log('Mock app listening on port 3000!');
});
