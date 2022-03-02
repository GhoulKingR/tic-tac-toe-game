let WSServer = require('ws').Server,
    wss = new WSServer({ port: 8080, path: '/room1' });

wss.on('connection', function (ws) {
  let gameBoard = ['', '', '', '', '', '', '', '', ''];
  console.log('player connected');

  ws.on('message', function (play) {
    console.log(play.toString());
    let game = JSON.parse(play.toString());
    gameBoard[game['pos']] = game['character'];
    ws.send(JSON.stringify(gameBoard));
  });

  ws.on('closed', function () {
    console.log('Player disconnected');
  })
});