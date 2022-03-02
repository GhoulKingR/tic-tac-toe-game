let WSServer = require('ws').Server,
    wss = new WSServer({ port: 8080, path: '/room1' }),
    ws_s = [],
    gameBoard = ['', '', '', '', '', '', '', '', ''];

wss.on('connection', function (ws) {
  ws_s.push(ws);
  console.log('player connected');

  ws.on('message', function (play) {
    console.log(play.toString());
    let game = JSON.parse(play.toString());
    gameBoard[game['pos']] = game['character'];
    for (let i = 0; i < ws_s.length; i++) ws_s[i].send(JSON.stringify(gameBoard));
  });

  ws.on('closed', function () {
    console.log('Player disconnected');
  })
});