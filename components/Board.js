import { useEffect, useState } from "react";
import { boardClick } from '../libs/Board.lib.js'

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
    <table>
      <tbody>
        <tr>
          <td className="cell" onClick={() => unlocked && boardClick(emitter, board, setBoard, 0)}>{ board[0] }</td>
          <td className="cell" onClick={() => unlocked && boardClick(emitter, board, setBoard, 1)}>{ board[1] }</td>
          <td className="cell" onClick={() => unlocked && boardClick(emitter, board, setBoard, 2)}>{ board[2] }</td>
        </tr>
        <tr>
          <td className="cell" onClick={() => unlocked && boardClick(emitter, board, setBoard, 3)}>{ board[3] }</td>
          <td className="cell" onClick={() => unlocked && boardClick(emitter, board, setBoard, 4)}>{ board[4] }</td>
          <td className="cell" onClick={() => unlocked && boardClick(emitter, board, setBoard, 5)}>{ board[5] }</td>
        </tr>
        <tr>
          <td className="cell" onClick={() => unlocked && boardClick(emitter, board, setBoard, 6)}>{ board[6] }</td>
          <td className="cell" onClick={() => unlocked && boardClick(emitter, board, setBoard, 7)}>{ board[7] }</td>
          <td className="cell" onClick={() => unlocked && boardClick(emitter, board, setBoard, 8)}>{ board[8] }</td>
        </tr>
      </tbody>
    </table>
  </>
}

export default Board;