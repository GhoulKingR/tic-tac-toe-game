import GameBoard from "./GameBoard";

function GameOver ({ xWon, oWon, board }) {
  return <>
    <div className='container'>
      <section>
        <h1 >
          {
            xWon ? "You won!"
              : oWon ? "You lost!"
                : "It's a tie!"
          }
        </h1>
        <p>
          This game has ended. To play again, <a onClick={() => document.location.assign(document.location)}>
          restart this app</a> and create a new game.
        </p>
      </section>
      <h3>Board:</h3>
    </div>
    <GameBoard board={board} boardClick={() => null} />
  </>
}

export default GameOver;