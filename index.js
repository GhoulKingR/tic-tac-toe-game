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
    {view === 'create-join'
      ? <CreateJoin setView={setView} JoinGame={JoinGame} CreateGame={CreateGame}/>
      : view === 'deployer-board'
        ? <Board emitter={deployerEmitter} />
        : <Board emitter={attacherEmitter} />}
  </>
}

function player(emitter) {
  return {
    playGame () {
      emitter.emit('unlockBoard');
      return new Promise((resolve) => {
        emitter.on('boardClick', data => {
          emitter.emit('lockBoard');
          resolve(data);
        });
      });
    },
    receivePlay (pos) {
      emitter.emit('playReceive', pos);
    }
  }
}

const playerA = {
  ...player(deployerEmitter),
  bJoined () {
    alert('Player 2 has Joined the game')
  }
};

const playerB = {
  ...player(attacherEmitter),
};

function JoinGame (e, acc, token, setView) {
  e.preventDefault();
  const ctc = acc.contract(backend, JSON.parse(token));
  backend.Bob(ctc, playerB);
  setView('attacher-board');
}

async function CreateGame (acc, setToken) {
  const ctc = acc.contract(backend);
  backend.Alice(ctc, playerA);
  const details = JSON.stringify(await ctc.getInfo(), null, 2);
  setToken( details );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)