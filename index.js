import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import * as backend from './build/index.main.mjs';
import CreateJoin from './components/CreateJoin.js';
import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect
}));

const actionsEnum = {
  x1_y1: 0, x1_y2: 1, x1_y3: 2,
  x2_y1: 3, x2_y2: 4, x2_y3: 5,
  x3_y1: 6, x3_y2: 7, x3_y3: 8,
  reset: 9
}
const intToOutcome = ['You win!', 'Draw!', 'Player 2 wins!'];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

function App () {
  const [acc, setAcc] = useState(undefined);
  const [view, setView] = useState('create-join');

  useEffect(() => {
    reach.getDefaultAccount()
      .then(setAcc)
  }, []);

  return <>
    {view === 'create-join'
      && <CreateJoin acc={acc}/>}
  </>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)