import React, { useRef, useState } from 'react';
import { CreateGame, JoinGame } from '../libs/CreateJoin.lib.js'

function CreateJoin ({ setView, setToken, setEmitter, acc }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const joinGameInput = useRef(null);

  return <>
    <div className='container'>
      <button className= 'button' onClick={() => CreateGame(acc, setToken, setEmitter, setView)}>Create a game space</button>
      <p>or</p>
      <form onSubmit={(e) => JoinGame(e, acc, joinGameInput.current.value, setView, setEmitter)}>
        <input type="text" onChange={(e) => setButtonDisabled(e.currentTarget.value.trim().length === 0)} ref={joinGameInput} placeholder="Paste Token..." />
        <button className= 'button' type="submit" disabled={buttonDisabled}>Join a game space</button>
      </form>

      <section>
        <h2>How to play</h2>
        
        <p>
          This game uses tokens to connect players together. When you create
          a game space, this app generates a token. This token allows a player
          to join your game and play against you.
        </p>

        <h2>Budget</h2>
        
        <p>
          With decentralization comes operation costs. This app includes the following 
          fees:
        </p>
        <ul>
          <li>0.1 Algo tokens to create a game (Host only)</li>
          <li>0.001 Algo tokens to make a move</li>
          <li>0.002 Algo tokens to delete the game space (Guest only)</li>
          <li>0.001 ALgo tokens to switch turns (Guest only)</li>
        </ul>
      </section>
    </div>
  </>
}

export default CreateJoin;