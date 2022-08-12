import React, { useState } from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import CreateJoin from './components/CreateJoin.js';
import Board from './components/Board.js';
import GameOver from './components/GameOver.js';
import ConnectWallet from './components/ConnectWallet';
import { isWinner } from './libs/index.libs.js';

function App () {
  const [view, setView] = useState('connect-wallet');
  const [acc, setAcc] = useState(undefined);
  const [emitter, setEmitter] = useState(null);
  const [board, setBoard] = useState([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);

  return <>
    {
    view === 'create-join' ? <CreateJoin acc={acc} setView={setView} setEmitter={setEmitter} />
    : view === 'board' ? <Board board={board} setBoard={setBoard} emitter={emitter} setView={setView} />
    : view === 'game-over' ? <GameOver xWon={isWinner(board, 'x')} oWon={isWinner(board, 'o')} /> 
    : <ConnectWallet setAcc={setAcc} openCreateJoin={() => setView('create-join')} />
    }
  </>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)