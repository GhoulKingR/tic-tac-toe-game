import React, { useState } from 'react';
import { EventEmitter } from 'events';
import './index.css';
import ReactDOM from 'react-dom';
import CreateJoin from './components/CreateJoin.js';
import Board from './components/Board.js';
import * as backend from './build/index.main.mjs';

const deployerEmitter = new EventEmitter();
const attacherEmitter = new EventEmitter();

function App () {
  const [view, setView] = useState('create-join');

  return <>
    {view === 'create-join' ? <CreateJoin setView={setView} JoinGame={JoinGame} CreateGame={CreateGame}/>
      : view === 'deployer-board' ? <Board emitter={deployerEmitter} />
        : view === 'attacher-board' ? <Board emitter={attacherEmitter} />
          : <GameOver /> }
  </>
}

function player(emitter) {

  return {
    playGame () {
      emitter.emit('unlockBoard');

      return new Promise((resolve) => {
        emitter.on('boardClick', (data, board) => {
          emitter.emit('lockBoard');
          const won = isWinner(board);
          const stepBy = won ? 9 : 1;

          if (won) alert("game ended");
          resolve((stepBy * 10) + data);
        });
      });
    },
    receivePlay (pos) {
      emitter.emit('playReceive', pos);
    }
  }
}

function JoinGame (e, acc, token, setView) {
  e.preventDefault();
  const ctc = acc.contract(backend, JSON.parse(token));
  backend.Bob(ctc, {
    ...player(attacherEmitter),
  });
  setView('attacher-board');
}

async function CreateGame (acc, setToken) {
  const ctc = acc.contract(backend);
  backend.Alice(ctc, {
    ...player(deployerEmitter),
    bJoined () {
      alert('Player 2 has Joined the game')
    }
  });
  const details = JSON.stringify(await ctc.getInfo(), null, 2);
  setToken( details );
}

function isWinner(board) {
  // horizontals
  for (let i = 0; i < 3; i++)
    if (board[i + 0] === board[i + 1] && board[i + 1] === board[i + 2] && board[i] !== ' ') 
      return true;

  // verticals 
  for (let i = 0; i < 3; i++)
    if (board[i] === board[i + 3] && board[i + 3] === board[i + 6] && board[i] !== ' ')
      return true;
    
  // diagonals
  if (
    ((board[0] === board[4] && board[4] === board[8])
    || (board[2] === board[4] && board[4] === board[6]))
    && board[4] !== ' '
  ) return true;


  return false;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)