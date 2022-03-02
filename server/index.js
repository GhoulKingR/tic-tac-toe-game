let WSServer = require('ws').Server,
    wss = new WSServer({ port: 8080, path: '/room1' });

wss.on('connection', function (ws) {
  let gameBoard = ['', '', '', '', '', '', '', '', ''];

  ws.on('message', function (play) {
    let game = JSON.parse(play);
    gameBoard[game['pos']] = game['character'];
    ws.send(gameBoard);
  });

  ws.on('closed', function () {
    console.log('Player disconnected');
  })
});