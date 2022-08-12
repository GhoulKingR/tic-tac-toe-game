import { useEffect, useState } from "react";
import { boardClick } from '../libs/Board.lib.js'
import GameBoard from "./GameBoard.js";

function Board ({ emitter, setView, board, setBoard }) {

  const [unlocked, setUnlocked] = useState(false);

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
  }, []);

  return <>
    <div>{ unlocked ? "It's Your turn" : "Waiting..." }</div>
    <GameBoard boardClick={(n) => unlocked && boardClick(emitter, board, setBoard, n)} board={board}/>
  </>
}

export default Board;