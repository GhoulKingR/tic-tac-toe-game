import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import React from 'react';

const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect
}));

function ConnectWallet({ setAcc, openCreateJoin }) {
  return <>
    <div>
      <h1>Tic-Tac-Toe</h1>
      <p>
        This tic-tac-toe project relies on the algorand blockchain network
        to connect players, and achieve decentralization. That said, all
        operations require a fee that its must pay. Fortunately, This app
        runs on the Algorand testnet.
        
        Algorand testnet allows you to freely acquire tokens for operating
        applications in the testnet environment. The testnet saves operation
        costs, but isn't ideal for production for several reasons.
      </p>

      <h2>Prerequisites</h2>
      <p>
        To run this app, you need the following:
      </p>
      <ul>
        <li><a href="https://wallet.myalgo.com/access">an algorand wallet</a></li>
        <li><a href="https://bank.testnet.algorand.network/">testnet tokens</a></li>
      </ul>


      <h2>Getting started</h2>
      <p>
        If you have safisfied the requirement, click the button below to connect
        your wallet and move to the next page.
      </p>

      <i><b>Note:</b> Make sure to use the browser that is logged in to your algorand wallet.</i>
    </div>
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