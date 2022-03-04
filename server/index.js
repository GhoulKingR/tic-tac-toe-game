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
        
    if (request === 'reset') resetGame(room['ws_s'], game['from']);
    else if (request === 'add') addPlayer(room, ws);
    else if (request === 'play') playGame(room, pos);
    else {
      throw new Error("The request: " + request + " is not implemented");
    }
  });
});

function playGame(room, pos) {
  room['board'][pos] = room['turn'];
  room['turn'] = invert(room['turn']);
  
  let message = JSON.stringify(
    !isWinner(room['board'])
      ? {
          type: 'play',
          board: room['board'],
          currentTurn: room['turn']
        }
      : {
          type: 'winner',
          board: room['board'],
          winner: invert(room['turn'])
        }
  );

  for (let i = 0; i < room['ws_s'].length; i++) {
    room['ws_s'][i].send(message);
  }
}

function addPlayer(room, ws) {
  console.log('player added');
  let message = "";

  if (room['avail_char'].length > 0) {
    room['ws_s'].push(ws);
    message = JSON.stringify({
      type: 'added',
      character: room['avail_char'].pop(),
      currentTurn: 'x',
    })  
  } else {
    message = JSON.stringify({
      type: 'error',
      message: 'The game is full',
    });
  }
  ws.send(message)
}

function resetGame(ws_s, from) {
  let message = JSON.stringify({
    type: 'reset',
    from: from,
  });

  for (let i = 0; i < ws_s.length; i++) {
    ws_s[i].send(message);
  }
}

function invert(turn) {
  return turn === 'x' ? 'o' : 'x';
}

function isWinner(board) {
  // horizontals
  for (let i = 0; i < 3; i++)
    if (board[i + 0] === board[i + 1] && board[i + 1] === board[i + 2] && board[i] !== '') 
      return true;

  // verticals 
  for (let i = 0; i < 3; i++)
    if (board[i] === board[i + 3] && board[i + 3] === board[i + 6] && board[i] !== '')
      return true;
    
  // diagonals
  if (
    ((board[0] === board[4] && board[4] === board[8])
    || (board[2] === board[4] && board[4] === board[6]))
    && board[4] !== ''
  ) return true;


  return false;
}

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