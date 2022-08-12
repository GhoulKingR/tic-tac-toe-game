import * as backend from '../build/index.main.mjs';
import { EventEmitter } from 'events';
import { isWinner } from './index.libs.js';

function player(emitter) {

  return {
    playGame () {
      emitter.emit('unlockBoard');

      return new Promise((resolve) => {
        emitter.on('boardClick', (data, board) => {
          emitter.emit('lockBoard');
          const won = isWinner(board, 'x') || isWinner(board, 'o');
          const stepBy = won ? 9 : 1;

          resolve((stepBy * 10) + data);
        });
      });
    },
    receivePlay (pos) {
      emitter.emit('playReceive', pos);
    },
    gameOver () {
      emitter.emit('game-over');
    }
  }
}

export function JoinGame (e, acc, token, setView, setEmitter) {
  e.preventDefault();
  const emitter = new EventEmitter()
  const ctc = acc.contract(backend, JSON.parse(token));
  backend.Bob(ctc, {
    ...player(emitter),
  });

  setEmitter(emitter);
  setView('board');
}

export async function CreateGame (acc, setToken, setEmitter) {
  const emitter = new EventEmitter()
  
  const ctc = acc.contract(backend);
  backend.Alice(ctc, {
    ...player(emitter),
    bJoined () {
      alert('Player 2 has Joined the game')
    }
  });
  const details = JSON.stringify(await ctc.getInfo(), null, 2);

  setToken( details );
  setEmitter( emitter );
}

export function copy(tokenInput, setView) {
  let tokenDest = tokenInput.current;
  tokenDest.select();
  document.execCommand('copy');
  setView('board');
}