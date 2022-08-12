export function isWinner(board, character) {
  // horizontals
  for (let i = 0; i < 3; i++)
    if (board[i + 0] === board[i + 1] && board[i + 1] === board[i + 2] && board[i] === character) 
      return true;

  // verticals 
  for (let i = 0; i < 3; i++)
    if (board[i] === board[i + 3] && board[i + 3] === board[i + 6] && board[i] === character)
      return true;
    
  // diagonals
  if (
    ((board[0] === board[4] && board[4] === board[8])
    || (board[2] === board[4] && board[4] === board[6]))
    && board[4] === character
  ) return true;

  return false;
}