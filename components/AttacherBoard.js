import { useEffect, useState } from "react";

function AttacherBoard ({ emitter }) {
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
      <tr>
        <td onClick={() => boardClick(emitter, setBoard, 0)}>{ board[0] }</td>
        <td onClick={() => boardClick(emitter, setBoard, 1)}>{ board[1] }</td>
        <td onClick={() => boardClick(emitter, setBoard, 2)}>{ board[2] }</td>
      </tr>
      <tr>
        <td onClick={() => boardClick(emitter, setBoard, 3)}>{ board[3] }</td>
        <td onClick={() => boardClick(emitter, setBoard, 4)}>{ board[4] }</td>
        <td onClick={() => boardClick(emitter, setBoard, 5)}>{ board[5] }</td>
      </tr>
      <tr>
        <td onClick={() => boardClick(emitter, setBoard, 6)}>{ board[6] }</td>
        <td onClick={() => boardClick(emitter, setBoard, 7)}>{ board[7] }</td>
        <td onClick={() => boardClick(emitter, setBoard, 8)}>{ board[8] }</td>
      </tr>
    </table>
  </>
}

function boardClick (emitter, setBoard, pos) {
  const newBoard = [...board];
  newBoard[pos] = 'x';
  setBoard(newBoard);
  emitter.emit('boardClick', pos);
}

export default AttacherBoard;