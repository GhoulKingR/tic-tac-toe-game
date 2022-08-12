import React, { useRef, useState } from 'react';
import { CreateGame, JoinGame, copy } from '../libs/CreateJoin.lib.js'

function CreateJoin ({ setView, setEmitter, acc }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const joinGameInput = useRef(null);
  const tokenInput = useRef(null);
  const [token, setToken] = useState('');

  return <>
    <button onClick={() => CreateGame(acc, setToken, setEmitter)}>Create Game</button><br />
    <div>
      <input type="text" readOnly={true} value={token} ref={tokenInput} /><br />
      <button onClick={() => copy(tokenInput, setView)} disabled={token.trim().length === 0} >Copy the Token</button>
    </div>
    <p>OR</p>
    <form onSubmit={(e) => JoinGame(e, acc, joinGameInput.current.value, setView, setEmitter)}>
      <input type="text" onChange={(e) => setButtonDisabled(e.currentTarget.value.trim().length === 0)} ref={joinGameInput} placeholder="Paste Token..." />
      <button type="submit" disabled={buttonDisabled}> Join Game </button>
    </form>
  </>
}

export default CreateJoin;