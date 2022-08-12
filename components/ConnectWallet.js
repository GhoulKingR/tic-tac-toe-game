import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

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