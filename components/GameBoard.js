
function GameBoard ({ boardClick, board }) {
  return <table className='container'>
    <tbody>
      <tr>
        <td className="cell" onClick={() => boardClick(0)}>{ board[0] }</td>
        <td className="cell" onClick={() => boardClick(1)}>{ board[1] }</td>
        <td className="cell" onClick={() => boardClick(2)}>{ board[2] }</td>
      </tr>
      <tr>
        <td className="cell" onClick={() => boardClick(3)}>{ board[3] }</td>
        <td className="cell" onClick={() => boardClick(4)}>{ board[4] }</td>
        <td className="cell" onClick={() => boardClick(5)}>{ board[5] }</td>
      </tr>
      <tr>
        <td className="cell" onClick={() => boardClick(6)}>{ board[6] }</td>
        <td className="cell" onClick={() => boardClick(7)}>{ board[7] }</td>
        <td className="cell" onClick={() => boardClick(8)}>{ board[8] }</td>
      </tr>
    </tbody>
  </table>
}

export default GameBoard;