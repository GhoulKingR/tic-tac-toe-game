import { useEffect, useState, useRef } from "react";
import { boardClick, copy } from '../libs/Board.lib.js'
import GameBoard from "./GameBoard.js";

function Board ({ emitter, token, setView, board, setBoard }) {

  const [unlocked, setUnlocked] = useState(false);
  const [guestJoined, setGuestJoined] = useState(false);
  const tokenInput = useRef(null);

  useEffect(() => {
    const playReceive = (pos) => {
      const newBoard = [...board];
      newBoard[pos] = 'o';
      setBoard(newBoard);
    };

    emitter.on('playReceive', playReceive);
    return () => emitter.off('playReceive', playReceive);
  }, [board]);

  useEffect(() => {
    emitter.on('unlockBoard', () => {
      setUnlocked(true);
    });
    emitter.on('lockBoard', () => {
      setUnlocked(false);
    });
    emitter.on('game-over', () => {
      setView('game-over');
    });
    emitter.on('player-2-joined', () => {
      alert('Guest has joined');
      setGuestJoined(true);
    })
  }, []);

  return <>
    <div className='container'>{ unlocked ? "It's Your turn" : "Waiting..." }</div>
    <GameBoard boardClick={(n) => unlocked && boardClick(emitter, board, setBoard, n)} board={board}/>
    {
      token.trim().length !== 0 && !guestJoined
      ? <div className='container'>
        <p>Use this token to invite a player</p>
        <input type="text" readOnly={true} value={token} ref={tokenInput} /><br />
        <button class= 'button' onClick={() => copy(tokenInput)} disabled={token.trim().length === 0} >Copy the Token</button>
      </div> 
      : <></>
    }
  </>
}

export default Board;