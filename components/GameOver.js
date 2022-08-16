import GameBoard from "./GameBoard";

function GameOver ({ xWon, oWon, board }) {
  return <>
    <div className='container'>
    <h1 >
      {
        xWon ? "You won!"
          : oWon ? "You lost!"
            : "It's a tie!"
      }
    </h1>
    <p>
      This game has ended. To play again, <a class = 'link' onClick={() => document.location.assign(document.location)}>
      <u>restart this app</u></a>, create a new game, and share the token with a friend.
    </p>
    <h3>Board:</h3>
    </div>
    <GameBoard board={board} boardClick={() => null} />
  </>
}

export default GameOver;