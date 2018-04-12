module.exports = function(io) {

  io.of('/test').on('connection', function (socket) {
    console.log('connection on test namespace');
  });

};
