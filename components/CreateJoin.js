import React, { useRef, useState } from 'react';
import { CreateGame, JoinGame } from '../libs/CreateJoin.lib.js'

function CreateJoin ({ setView, setToken, setEmitter, acc }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const joinGameInput = useRef(null);

  return <>
    <div className='container'>
    <button class= 'button' onClick={() => CreateGame(acc, setToken, setEmitter, setView)}>Create a game space</button>
    <p>or</p>
    <form onSubmit={(e) => JoinGame(e, acc, joinGameInput.current.value, setView, setEmitter)}>
      <input type="text" onChange={(e) => setButtonDisabled(e.currentTarget.value.trim().length === 0)} ref={joinGameInput} placeholder="Paste Token..." />
      <button class= 'button' type="submit" disabled={buttonDisabled}>Join a game space</button>
    </form>

      <h2>How to play</h2>
      
      <p>This game uses tokens to connect players together.</p>
      <p>When you create a game space, this app generates a token.</p>
      <p>This token allows a player to join your game and play against you.</p>

      <h2>Budget</h2>
      
      <p>With decentralization comes operation costs.</p> 
      <p>The following table shows the fees that each player needs to pay to play the game without problems.</p>

      <table>
        <thead>
          <tr>
            <td>Host (player 1) </td>
            <td>Guest (player 2)</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0.1</td>
            <td>0.1</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
}

export default CreateJoin;