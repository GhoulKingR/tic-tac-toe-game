let WSServer = require('ws').Server,
    express = require('express'),
    app = express(),
    rooms = {};

function initRoom(room) {
  room[0].on('connection', function (ws) {
    room[2].push(ws);
    console.log('player connected');

    ws.on('message', function (play) {
      console.log(play.toString());
      let game = JSON.parse(play.toString());
      room[1][game['pos']] = game['character'];
      for (let i = 0; i < room[2].length; i++) room[2][i].send(JSON.stringify(room[1]));
    });

    ws.on('closed', function () {
      console.log('Player disconnected');
    })
  });
}

app.post('/createroom', function (req, res) {
  let token = Math.floor(Math.random() * 1000).toString() + Math.floor(Date.now()).toString();
  rooms[token] = [new WSServer({ port: 8080, path: '/' + token }), ['', '', '', '', '', '', '', '', ''], []];
  initRoom(rooms[token]);
  res.send(token);
});

app.listen(8080, function() {
  console.log('Listening on port 8080');
})