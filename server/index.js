let WSServer = require('ws').Server,
    wss = new WSServer({ port: 8181 }),
    express = require('express'),
    cors = require('cors'),
    app = express(),
    rooms = {};

wss.on('connection', function (ws) {
  console.log('player connected');

  ws.on('message', function (play) {
    let game = JSON.parse(play.toString()),
        {token, request, pos, character} = game;

    if (request === 'add') {
      console.log('player added');
      rooms[token][1].push(ws);
    } else if (request === 'play') {
      rooms[token][0][pos] = rooms[token][2];
      rooms[token][2] = rooms[token][2] == 'x' ? 'o' : 'x';

      for (let i = 0; i < rooms[token][1].length; i++) {
        rooms[token][1][i].send(
          JSON.stringify({
            board: rooms[token][0],
          })
        )
      }
    }
  });
});

app.use(cors());

app.post('/createroom', function (req, res) {
  let token = Math.floor(Math.random() * 1000).toString() + Math.floor(Date.now()).toString();
  rooms[token] = [['', '', '', '', '', '', '', '', ''], [], 'x'];
  res.send(token);
});

app.listen(8080, function() {
  console.log('Listening on port 8080');
})