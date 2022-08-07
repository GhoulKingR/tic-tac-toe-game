import React, { useState } from 'react';
import { EventEmitter } from 'events';
import './index.css';
import ReactDOM from 'react-dom';
import CreateJoin from './components/CreateJoin.js';
import Board from './components/Board.js';
import * as backend from './build/index.main.mjs';

const deployerEmitter = new EventEmitter();
const attacherEmitter = new EventEmitter();

const actionsEnum = {
  x1_y1: 0, x1_y2: 1,  x1_y3: 2,
  x2_y1: 3, x2_y2: 4,  x2_y3: 5,
  x3_y1: 6, x3_y2: 7,  x3_y3: 8,
  reset: 9, joined: 10
}
const intToOutcome = ['You win!', 'Draw!', 'Player 2 wins!'];

function App () {
  const [view, setView] = useState('create-join');

  return <>
    {view === 'create-join'
      ? <CreateJoin setView={setView} JoinGame={JoinGame} CreateGame={CreateGame}/>
      : view === 'deployer-board'
        ? <Board emitter={deployerEmitter} />
        : <Board emitter={attacherEmitter} />}
  </>
}

function JoinGame (e, acc, token, setView) {
  e.preventDefault();
  const ctc = acc.contract(backend, JSON.parse(token));
  backend.Bob(ctc, {
    // Bob's interface
    playGame () {
      return new Promise((resolve) => {
        deployerEmitter.on('boardClick', resolve);
      });
    },
    receivePlay (pos) {
      deployerEmitter.emit('playReceive', pos);
    }
  });
  setView('attacher-board');
}

async function CreateGame (acc, setToken) {
  const ctc = acc.contract(backend);
  backend.Alice(ctc, {
    // Alice's interface
    playGame () {
      return new Promise((resolve) => {
        deployerEmitter.on('boardClick', () => resolve());
      });
    },
    receivePlay (pos) {
      deployerEmitter.emit('playReceive', pos);
    }
  });
  const details = JSON.stringify(await ctc.getInfo(), null, 2);
  setToken( details );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)