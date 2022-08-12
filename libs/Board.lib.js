export function boardClick (emitter, board, setBoard, pos) {
  const newBoard = [...board];
  newBoard[pos] = 'x';
  setBoard(newBoard);
  emitter.emit('boardClick', pos, newBoard);
}

export function copy(tokenInput) {
  let tokenDest = tokenInput.current;
  tokenDest.select();
  document.execCommand('copy');
}