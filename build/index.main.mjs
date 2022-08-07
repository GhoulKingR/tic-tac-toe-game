// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0],
      3: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:20:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:20:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v57, time: v56, didSend: v22, from: v55 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v57, time: v56, didSend: v22, from: v55 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v60, time: v59, didSend: v26, from: v58 } = txn2;
  ;
  const v63 = stdlib.protect(ctc0, await interact.playGame(), {
    at: './index.rsh:27:46:application',
    fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:13:function exp)'],
    msg: 'playGame',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v55, v63],
    evt_cnt: 1,
    funcNum: 2,
    lct: v59,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:29:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v65], secs: v67, time: v66, didSend: v36, from: v64 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v65], secs: v67, time: v66, didSend: v36, from: v64 } = txn3;
  ;
  const v68 = stdlib.addressEq(v55, v64);
  stdlib.assert(v68, {
    at: './index.rsh:29:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v55],
    evt_cnt: 0,
    funcNum: 3,
    lct: v66,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v73, time: v72, didSend: v44, from: v71 } = txn4;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v73, time: v72, didSend: v44, from: v71 } = txn4;
  ;
  const v74 = stdlib.addressEq(v55, v71);
  stdlib.assert(v74, {
    at: './index.rsh:35:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  return;
  
  
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v57, time: v56, didSend: v22, from: v55 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v55],
    evt_cnt: 0,
    funcNum: 1,
    lct: v56,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v60, time: v59, didSend: v26, from: v58 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v60, time: v59, didSend: v26, from: v58 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v65], secs: v67, time: v66, didSend: v36, from: v64 } = txn3;
  ;
  const v68 = stdlib.addressEq(v55, v64);
  stdlib.assert(v68, {
    at: './index.rsh:29:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.receivePlay(v65), {
    at: './index.rsh:33:25:application',
    fs: ['at ./index.rsh:32:9:application call to [unknown function] (defined at: ./index.rsh:32:13:function exp)'],
    msg: 'receivePlay',
    who: 'Bob'
    });
  
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v73, time: v72, didSend: v44, from: v71 } = txn4;
  ;
  const v74 = stdlib.addressEq(v55, v71);
  stdlib.assert(v74, {
    at: './index.rsh:35:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  return;
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAECAyYCAQAAIjUAMRhBAVopZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSQMQABwSSUMQAAnJRJEJTQBEkQ0BEkiEkw0AhIRRChkNQOABKdlxLSwNAMxABJEQgCvSCQ0ARJENARJIhJMNAISEUQoZEk1AzX/STUFFzX+gASXTvcXNP4WULA0/zEAEkQ0/yhLAVcAIGdIJTUBMgY1AkIAiEkjDEAAM0gjNAESRDQESSISTDQCEhFEKGRJNQM1/4AEmouRdLA0/yhLAVcAIGdIJDUBMgY1AkIAT0iBoI0GiACYIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAxAChLAVcAIGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v65",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v65",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610a9b380380610a9b8339810160408190526100229161018d565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a161007d341560076100cb565b60408051602080820183523380835260016000819055439055835191820152909101604051602081830303815290604052600290805190602001906100c39291906100f4565b505050610230565b816100f05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054610100906101f5565b90600052602060002090601f0160209004810192826101225760008555610168565b82601f1061013b57805160ff1916838001178555610168565b82800160010185558215610168579182015b8281111561016857825182559160200191906001019061014d565b50610174929150610178565b5090565b5b808211156101745760008155600101610179565b60006040828403121561019f57600080fd5b604080519081016001600160401b03811182821017156101cf57634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146101e957600080fd5b60208201529392505050565b600181811c9082168061020957607f821691505b6020821081141561022a57634e487b7160e01b600052602260045260246000fd5b50919050565b61085c8061023f6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a1591461008357806345f703961461009657806373b4522c146100a957806383230757146100bc578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100913660046106ce565b6100f4565b61005d6100a43660046106ce565b610266565b61005d6100b73660046106ce565b6103d8565b3480156100c857600080fd5b50600154610070565b3480156100dd57600080fd5b506100e661051e565b60405161007a9291906106f1565b61010460016000541460096105bb565b61011e8135158061011757506001548235145b600a6105bb565b6000808055600280546101309061074e565b80601f016020809104026020016040519081016040528092919081815260200182805461015c9061074e565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610783565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101f49291906107e9565b60405180910390a1610208341560086105bb565b60408051602081019091526000815281516001600160a01b0316808252600260005543600155604080516020810192909252015b604051602081830303815290604052600290805190602001906102609291906105e0565b50505050565b610276600260005414600d6105bb565b6102908135158061028957506001548235145b600e6105bb565b6000808055600280546102a29061074e565b80601f01602080910402602001604051908101604052809291908181526020018280546102ce9061074e565b801561031b5780601f106102f05761010080835404028352916020019161031b565b820191906000526020600020905b8154815290600101906020018083116102fe57829003601f168201915b50505050508060200190518101906103339190610783565b6040805133815284356020808301919091528501358183015290519192507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8919081900360600190a16103883415600b6105bb565b80516103a0906001600160a01b03163314600c6105bb565b60408051602081019091526000815281516001600160a01b03168082526003600055436001556040805160208101929092520161023c565b6103e860036000541460116105bb565b610402813515806103fb57506001548235145b60126105bb565b6000808055600280546104149061074e565b80601f01602080910402602001604051908101604052809291908181526020018280546104409061074e565b801561048d5780601f106104625761010080835404028352916020019161048d565b820191906000526020600020905b81548152906001019060200180831161047057829003601f168201915b50505050508060200190518101906104a59190610783565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633836040516104d89291906107e9565b60405180910390a16104ec3415600f6105bb565b8051610504906001600160a01b0316331460106105bb565b6000808055600181905561051a90600290610664565b5050565b6000606060005460028080546105339061074e565b80601f016020809104026020016040519081016040528092919081815260200182805461055f9061074e565b80156105ac5780601f10610581576101008083540402835291602001916105ac565b820191906000526020600020905b81548152906001019060200180831161058f57829003601f168201915b50505050509050915091509091565b8161051a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b8280546105ec9061074e565b90600052602060002090601f01602090048101928261060e5760008555610654565b82601f1061062757805160ff1916838001178555610654565b82800160010185558215610654579182015b82811115610654578251825591602001919060010190610639565b506106609291506106a1565b5090565b5080546106709061074e565b6000825580601f10610680575050565b601f01602090049060005260206000209081019061069e91906106a1565b50565b5b8082111561066057600081556001016106a2565b6000604082840312156106c857600080fd5b50919050565b6000604082840312156106e057600080fd5b6106ea83836106b6565b9392505050565b82815260006020604081840152835180604085015260005b8181101561072557858101830151858201606001528201610709565b81811115610737576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061076257607f821691505b602082108114156106c857634e487b7160e01b600052602260045260246000fd5b60006020828403121561079557600080fd5b6040516020810181811067ffffffffffffffff821117156107c657634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146107e057600080fd5b81529392505050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461081757600080fd5b8060408501525050939250505056fea2646970667358221220e30d057688b8ba5a9b4be62af6603757965153eb72aabb1e6a05410e060292b364736f6c634300080c0033`,
  BytecodeLen: 2715,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:21:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:24:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:30:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:36:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
