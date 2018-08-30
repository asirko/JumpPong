module.exports = function(io) {

  console.log('socket init ?');

  io.on('connection', function (socket) {
    console.log('connection on test namespace');
  });

};
