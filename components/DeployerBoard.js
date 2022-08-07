import { useEffect, useState } from "react";

function DeployerBoard ({ emitter }) {

  let [board, setBoard] = useState([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);

  useEffect(() => {
    emitter.on('playReceive', (pos) => {
      const newBoard = [...board];
      newBoard[pos] = 'o';
      setBoard(newBoard);
    });
  }, []);

  return <>
    <table>
      <tbody>
        <tr>
          <td className="cell" onClick={() => boardClick(emitter, setBoard, 0)}>{ board[0] }</td>
          <td className="cell" onClick={() => boardClick(emitter, setBoard, 1)}>{ board[1] }</td>
          <td className="cell" onClick={() => boardClick(emitter, setBoard, 2)}>{ board[2] }</td>
        </tr>
        <tr>
          <td className="cell" onClick={() => boardClick(emitter, setBoard, 3)}>{ board[3] }</td>
          <td className="cell" onClick={() => boardClick(emitter, setBoard, 4)}>{ board[4] }</td>
          <td className="cell" onClick={() => boardClick(emitter, setBoard, 5)}>{ board[5] }</td>
        </tr>
        <tr>
          <td className="cell" onClick={() => boardClick(emitter, setBoard, 6)}>{ board[6] }</td>
          <td className="cell" onClick={() => boardClick(emitter, setBoard, 7)}>{ board[7] }</td>
          <td className="cell" onClick={() => boardClick(emitter, setBoard, 8)}>{ board[8] }</td>
        </tr>
      </tbody>
    </table>
  </>
}

function boardClick (emitter, setBoard, pos) {
  const newBoard = [...board];
  newBoard[pos] = 'x';
  setBoard(newBoard);
  emitter.emit('boardClick', pos);
}

export default DeployerBoard;