function GameOver ({ xWon, oWon }) {
  return <>
    <h1>
      {
        xWon ? "You won!"
          : oWon ? "You lost!"
            : "It's a tie!"
      }
    </h1>
    <p>
      This game has ended. To play again, <a onClick={() => document.location.assign(document.location)}>
      restart this app</a>, create a new game, and share the token with a friend.
    </p>
  </>
}

export default GameOver;