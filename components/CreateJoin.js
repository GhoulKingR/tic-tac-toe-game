import React, { useEffect, useRef, useState } from 'react';

function CreateJoin ({ setView, CreateGame, JoinGame, acc }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const joinGameInput = useRef(null);
  const tokenInput = useRef(null);
  const [token, setToken] = useState('');

  return <>
    <button onClick={() => CreateGame(acc, setToken)}>Create Game</button><br />
    <div>
      <input
        type="text"
        readOnly={true}
        value={token}
        ref={tokenInput}
      /><br />
      <button
        onClick={() => copy(tokenInput, setView)}
        disabled={token.trim().length === 0}
      >Copy the Token</button>
    </div>
    <p>OR</p>
    <form onSubmit={(e) => JoinGame(e, acc, joinGameInput.current.value, setView)}>
      <input
        type="text"
        onChange={(e) => setButtonDisabled(e.currentTarget.value.trim().length === 0)}
        ref={joinGameInput}
        placeholder="Paste Token..."
      />
      <button type="submit" disabled={buttonDisabled}> Join Game </button>
    </form>
  </>
}

function copy(tokenInput, setView) {
  let tokenDest = tokenInput.current;
  tokenDest.select();
  document.execCommand('copy');
  setView('deployer-board');
}

export default CreateJoin;