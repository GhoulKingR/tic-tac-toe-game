import React, { useEffect, useRef, useState } from 'react';
import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect
}));

function CreateJoin ({ setView, CreateGame, JoinGame }) {
  const [acc, setAcc] = useState(undefined);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const joinGameInput = useRef(null);
  const tokenInput = useRef(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    reach.getDefaultAccount()
      .then(setAcc)
  }, []);

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