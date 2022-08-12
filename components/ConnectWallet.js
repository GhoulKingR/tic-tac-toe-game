import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import React from 'react';

const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect
}));

function ConnectWallet({ setAcc, openCreateJoin }) {
  return <>
    <button onClick={() => {
      reach.getDefaultAccount()
        .then(setAcc)
        .then(() => openCreateJoin());
    }}>
      Connect wallet
    </button>
  </>
}

export default ConnectWallet;

/**
 * OUTLINE
 * 
 * What is this project?
 * - Describes this project
 * 
 * What do you need to run this project?
 * - Lists the tools you need to run the project without problems
 * 
 * What next.
 * - Describes the next action to play the game
 * 
 */