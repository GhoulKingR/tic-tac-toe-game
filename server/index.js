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
    {token, request, pos} = game,
    room = rooms[token];

    if (request === 'add') {
      console.log('player added');
      
      if (room['avail_char'].length > 0) {
        room['ws_s'].push(ws);
        ws.send(
          JSON.stringify({
            type: 'added',
            character: room['avail_char'].pop(),
            currentTurn: 'x',
          })
        )
      } else {
        ws.send(JSON.stringify({
          type: 'error',
          message: 'The game is full',
        }));
      }
    } else if (request === 'play') {
      room['board'][pos] = room['turn'];
      room['turn'] = room['turn'] === 'x' ? 'o' : 'x';

      for (let i = 0; i < room['ws_s'].length; i++) {
        room['ws_s'][i].send(
          JSON.stringify({
            type: 'play',
            board: room['board'],
            currentTurn: room['turn']
          })
        )
      }
    }
  });
});

app.use(cors());

app.post('/createroom', function (req, res) {
  let token = Math.floor(Math.random() * 1000).toString() + Math.floor(Date.now()).toString();
  rooms[token] = {
    board: ['', '', '', '', '', '', '', '', ''], 
    ws_s: [], 
    turn: 'x',
    avail_char: ['o', 'x']};
  res.send(token);
});

app.listen(8080, function() {
  console.log('Listening on port 8080');
})