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
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      4: [ctc0, ctc0, ctc1],
      5: [ctc0, ctc0, ctc1],
      6: [ctc0, ctc0, ctc1]
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
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  
  
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
      
      
      const {data: [], secs: v100, time: v99, didSend: v22, from: v98 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v100, time: v99, didSend: v22, from: v98 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v103, time: v102, didSend: v26, from: v101 } = txn2;
  ;
  stdlib.protect(ctc0, await interact.bJoined(), {
    at: './index.rsh:26:21:application',
    fs: ['at ./index.rsh:25:9:application call to [unknown function] (defined at: ./index.rsh:25:13:function exp)'],
    msg: 'bJoined',
    who: 'Alice'
    });
  
  let v106 = stdlib.checkedBigNumberify('./index.rsh:29:15:decimal', stdlib.UInt_max, '0');
  let v107 = v102;
  
  while (await (async () => {
    const v117 = stdlib.lt(v106, stdlib.checkedBigNumberify('./index.rsh:31:18:decimal', stdlib.UInt_max, '9'));
    
    return v117;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v120, time: v119, didSend: v40, from: v118 } = txn3;
    ;
    const v121 = stdlib.addressEq(v101, v118);
    stdlib.assert(v121, {
      at: './index.rsh:33:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v122 = stdlib.mod(v106, stdlib.checkedBigNumberify('./index.rsh:35:17:decimal', stdlib.UInt_max, '2'));
    const v123 = stdlib.eq(v122, stdlib.checkedBigNumberify('./index.rsh:35:22:decimal', stdlib.UInt_max, '1'));
    if (v123) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v128], secs: v130, time: v129, didSend: v52, from: v127 } = txn4;
      ;
      const v131 = stdlib.addressEq(v101, v127);
      stdlib.assert(v131, {
        at: './index.rsh:41:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v134 = stdlib.mod(v128, stdlib.checkedBigNumberify('./index.rsh:44:37:decimal', stdlib.UInt_max, '10'));
      stdlib.protect(ctc0, await interact.receivePlay(v134), {
        at: './index.rsh:44:29:application',
        fs: ['at ./index.rsh:43:13:application call to [unknown function] (defined at: ./index.rsh:43:17:function exp)'],
        msg: 'receivePlay',
        who: 'Alice'
        });
      
      const v136 = stdlib.sub(v128, v134);
      const v137 = stdlib.div(v136, stdlib.checkedBigNumberify('./index.rsh:47:41:decimal', stdlib.UInt_max, '10'));
      const v138 = stdlib.add(v106, v137);
      const cv106 = v138;
      const cv107 = v129;
      
      v106 = cv106;
      v107 = cv107;
      
      continue;
      
      }
    else {
      const v141 = stdlib.protect(ctc1, await interact.playGame(), {
        at: './index.rsh:54:51:application',
        fs: ['at ./index.rsh:53:13:application call to [unknown function] (defined at: ./index.rsh:53:17:function exp)'],
        msg: 'playGame',
        who: 'Alice'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v98, v101, v106, v141],
        evt_cnt: 1,
        funcNum: 5,
        lct: v119,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:56:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v143], secs: v145, time: v144, didSend: v70, from: v142 } = txn4;
          
          ;
          const v150 = stdlib.mod(v143, stdlib.checkedBigNumberify('./index.rsh:61:34:decimal', stdlib.UInt_max, '10'));
          const v151 = stdlib.sub(v143, v150);
          const v152 = stdlib.div(v151, stdlib.checkedBigNumberify('./index.rsh:61:41:decimal', stdlib.UInt_max, '10'));
          const v153 = stdlib.add(v106, v152);
          const cv106 = v153;
          const cv107 = v144;
          
          await (async () => {
            const v106 = cv106;
            const v107 = cv107;
            
            if (await (async () => {
              const v117 = stdlib.lt(v106, stdlib.checkedBigNumberify('./index.rsh:31:18:decimal', stdlib.UInt_max, '9'));
              
              return v117;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc2, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v143], secs: v145, time: v144, didSend: v70, from: v142 } = txn4;
      ;
      const v146 = stdlib.addressEq(v98, v142);
      stdlib.assert(v146, {
        at: './index.rsh:56:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v150 = stdlib.mod(v143, stdlib.checkedBigNumberify('./index.rsh:61:34:decimal', stdlib.UInt_max, '10'));
      const v151 = stdlib.sub(v143, v150);
      const v152 = stdlib.div(v151, stdlib.checkedBigNumberify('./index.rsh:61:41:decimal', stdlib.UInt_max, '10'));
      const v153 = stdlib.add(v106, v152);
      const cv106 = v153;
      const cv107 = v144;
      
      v106 = cv106;
      v107 = cv107;
      
      continue;
      
      }
    
    }
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
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v100, time: v99, didSend: v22, from: v98 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v98],
    evt_cnt: 0,
    funcNum: 1,
    lct: v99,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v103, time: v102, didSend: v26, from: v101 } = txn2;
      
      ;
      const v106 = stdlib.checkedBigNumberify('./index.rsh:29:15:decimal', stdlib.UInt_max, '0');
      const v107 = v102;
      
      if (await (async () => {
        const v117 = stdlib.lt(v106, stdlib.checkedBigNumberify('./index.rsh:31:18:decimal', stdlib.UInt_max, '9'));
        
        return v117;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v103, time: v102, didSend: v26, from: v101 } = txn2;
  ;
  let v106 = stdlib.checkedBigNumberify('./index.rsh:29:15:decimal', stdlib.UInt_max, '0');
  let v107 = v102;
  
  while (await (async () => {
    const v117 = stdlib.lt(v106, stdlib.checkedBigNumberify('./index.rsh:31:18:decimal', stdlib.UInt_max, '9'));
    
    return v117;})()) {
    const txn3 = await (ctc.sendrecv({
      args: [v98, v101, v106],
      evt_cnt: 0,
      funcNum: 3,
      lct: v107,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:33:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v120, time: v119, didSend: v40, from: v118 } = txn3;
        
        ;
        const v122 = stdlib.mod(v106, stdlib.checkedBigNumberify('./index.rsh:35:17:decimal', stdlib.UInt_max, '2'));
        const v123 = stdlib.eq(v122, stdlib.checkedBigNumberify('./index.rsh:35:22:decimal', stdlib.UInt_max, '1'));
        if (v123) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc1, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v120, time: v119, didSend: v40, from: v118 } = txn3;
    ;
    const v121 = stdlib.addressEq(v101, v118);
    stdlib.assert(v121, {
      at: './index.rsh:33:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v122 = stdlib.mod(v106, stdlib.checkedBigNumberify('./index.rsh:35:17:decimal', stdlib.UInt_max, '2'));
    const v123 = stdlib.eq(v122, stdlib.checkedBigNumberify('./index.rsh:35:22:decimal', stdlib.UInt_max, '1'));
    if (v123) {
      const v126 = stdlib.protect(ctc0, await interact.playGame(), {
        at: './index.rsh:39:51:application',
        fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:17:function exp)'],
        msg: 'playGame',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v98, v101, v106, v126],
        evt_cnt: 1,
        funcNum: 4,
        lct: v119,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:41:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v128], secs: v130, time: v129, didSend: v52, from: v127 } = txn4;
          
          ;
          const v135 = stdlib.mod(v128, stdlib.checkedBigNumberify('./index.rsh:47:34:decimal', stdlib.UInt_max, '10'));
          const v136 = stdlib.sub(v128, v135);
          const v137 = stdlib.div(v136, stdlib.checkedBigNumberify('./index.rsh:47:41:decimal', stdlib.UInt_max, '10'));
          const v138 = stdlib.add(v106, v137);
          const cv106 = v138;
          const cv107 = v129;
          
          await (async () => {
            const v106 = cv106;
            const v107 = cv107;
            
            if (await (async () => {
              const v117 = stdlib.lt(v106, stdlib.checkedBigNumberify('./index.rsh:31:18:decimal', stdlib.UInt_max, '9'));
              
              return v117;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc1, ctc1, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v128], secs: v130, time: v129, didSend: v52, from: v127 } = txn4;
      ;
      const v131 = stdlib.addressEq(v101, v127);
      stdlib.assert(v131, {
        at: './index.rsh:41:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v135 = stdlib.mod(v128, stdlib.checkedBigNumberify('./index.rsh:47:34:decimal', stdlib.UInt_max, '10'));
      const v136 = stdlib.sub(v128, v135);
      const v137 = stdlib.div(v136, stdlib.checkedBigNumberify('./index.rsh:47:41:decimal', stdlib.UInt_max, '10'));
      const v138 = stdlib.add(v106, v137);
      const cv106 = v138;
      const cv107 = v129;
      
      v106 = cv106;
      v107 = cv107;
      
      continue;
      
      }
    else {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v143], secs: v145, time: v144, didSend: v70, from: v142 } = txn4;
      ;
      const v146 = stdlib.addressEq(v98, v142);
      stdlib.assert(v146, {
        at: './index.rsh:56:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v149 = stdlib.mod(v143, stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, '10'));
      stdlib.protect(ctc2, await interact.receivePlay(v149), {
        at: './index.rsh:58:29:application',
        fs: ['at ./index.rsh:57:13:application call to [unknown function] (defined at: ./index.rsh:57:17:function exp)'],
        msg: 'receivePlay',
        who: 'Bob'
        });
      
      const v151 = stdlib.sub(v143, v149);
      const v152 = stdlib.div(v151, stdlib.checkedBigNumberify('./index.rsh:61:41:decimal', stdlib.UInt_max, '10'));
      const v153 = stdlib.add(v106, v152);
      const cv106 = v153;
      const cv107 = v144;
      
      v106 = cv106;
      v107 = cv107;
      
      continue;
      
      }
    
    }
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAIAAEFCgRABgImAgEAACI1ADEYQQIsKWRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBAwxAAR5JIQQMQAChSSQMQABPJBJEIQY0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFFzX+gASBqprPNP4WULA0/zEAEkQ0/zQDVyAgNAMhBVs0/kklGAklCggyBkIBI0gkNAESRDQESSISTDQCEhFEKGRJNQNXICA1/0k1BRc1/oAE+YuveDT+FlCwNP8xABJENANXACA0/zQDIQVbNP5JJRgJJQoIMgZCANdIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf9XICA1/iEFWzX9gASnZcS0sDT+MQASRDT9IQcYIxJBABs0/zT+UDT9FlAoSwFXAEhnSCQ1ATIGNQJCAMc0/zT+UDT9FlAoSwFXAEhnSCEGNQEyBjUCQgCrSSMMQAAoIxJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABJqLkXSwNAMxACIyBkIAM0iBoI0GiADHIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAxAChLAVcAIGdIIzUBMgY1AkIASjX/Nf41/TX8NP6BCQxBABw0/DT9UDT+FlAoSwFXAEhnSCEENQEyBjUCQgAeQgAAMRkkEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQcxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
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
                "name": "v128",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
                "name": "v143",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
                "name": "v128",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
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
                "name": "v143",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000f3938038062000f398339810160408190526200002691620001a4565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d4565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000cb929190620000fe565b5050506200024c565b81620000fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010c906200020f565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600060408284031215620001b757600080fd5b604080519081016001600160401b0381118282101715620001e857634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020357600080fd5b60208201529392505050565b600181811c908216806200022457607f821691505b602082108114156200024657634e487b7160e01b600052602260045260246000fd5b50919050565b610cdd806200025c6000396000f3fe60806040526004361061006e5760003560e01c806373b4522c1161004b57806373b4522c146100c157806383230757146100d4578063a209ad4e146100e9578063ab53f2c6146100fc57005b80631e93b0f1146100775780632c10a1591461009b578063552d7b8e146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a93660046109f2565b61011f565b6100756100bc3660046109f2565b610271565b6100756100cf3660046109f2565b610419565b3480156100e057600080fd5b50600154610088565b6100756100f73660046109f2565b610635565b34801561010857600080fd5b50610111610764565b604051610092929190610a15565b61012f6001600054146009610801565b6101498135158061014257506001548235145b600a610801565b60008080556002805461015b90610a72565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610a72565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610ac3565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161021f929190610b1b565b60405180910390a161023334156008610801565b61023b6108c7565b815181516001600160a01b039091169052805133602091820152808201805160009052514391015261026c81610826565b505050565b6102816006600054146015610801565b61029b8135158061029457506001548235145b6016610801565b6000808055600280546102ad90610a72565b80601f01602080910402602001604051908101604052809291908181526020018280546102d990610a72565b80156103265780601f106102fb57610100808354040283529160200191610326565b820191906000526020600020905b81548152906001019060200180831161030957829003601f168201915b505050505080602001905181019061033e9190610b58565b90507f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d33383604051610371929190610bce565b60405180910390a161038534156013610801565b805161039d906001600160a01b031633146014610801565b6103a56108c7565b815181516001600160a01b0391821690526020808401518351921691810191909152600a906103d8908290860135610c0b565b6103e6906020860135610c35565b6103f09190610c4c565b82604001516103ff9190610c60565b602080830180519290925290514391015261026c81610826565b610429600460005414600d610801565b6104438135158061043c57506001548235145b600e610801565b60008080556002805461045590610a72565b80601f016020809104026020016040519081016040528092919081815260200182805461048190610a72565b80156104ce5780601f106104a3576101008083540402835291602001916104ce565b820191906000526020600020905b8154815290600101906020018083116104b157829003601f168201915b50505050508060200190518101906104e69190610b58565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63383604051610519929190610b1b565b60405180910390a161052d3415600b610801565b6020810151610548906001600160a01b03163314600c610801565b60016002826040015161055b9190610c0b565b14156105de57604080516060810182526000808252602080830182815283850183815286516001600160a01b0390811686528784015116909152858501519052600590915543600155915190916105b491839101610c78565b604051602081830303815290604052600290805190602001906105d892919061090b565b50505050565b604080516060810182526000808252602080830182815283850183815286516001600160a01b0390811686528784015116909152858501519052600690915543600155915190916105b491839101610c78565b5050565b6106456005600054146011610801565b61065f8135158061065857506001548235145b6012610801565b60008080556002805461067190610a72565b80601f016020809104026020016040519081016040528092919081815260200182805461069d90610a72565b80156106ea5780601f106106bf576101008083540402835291602001916106ea565b820191906000526020600020905b8154815290600101906020018083116106cd57829003601f168201915b50505050508060200190518101906107029190610b58565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03383604051610735929190610bce565b60405180910390a16107493415600f610801565b602081015161039d906001600160a01b031633146010610801565b60006060600054600280805461077990610a72565b80601f01602080910402602001604051908101604052809291908181526020018280546107a590610a72565b80156107f25780601f106107c7576101008083540402835291602001916107f2565b820191906000526020600020905b8154815290600101906020018083116107d557829003601f168201915b50505050509050915091509091565b816106315760405163100960cb60e01b81526004810182905260240160405180910390fd5b602081015151600911156108ae5760408051606081018252600080825260208083018281528385018381528651516001600160a01b039081168652875184015116909152858201515190526004909155436001559151909161088a91839101610c78565b6040516020818303038152906040526002908051906020019061026c92919061090b565b600080805560018190556108c49060029061098f565b50565b60408051608081018252600091810182815260608201929092529081908152602001610906604051806040016040528060008152602001600081525090565b905290565b82805461091790610a72565b90600052602060002090601f016020900481019282610939576000855561097f565b82601f1061095257805160ff191683800117855561097f565b8280016001018555821561097f579182015b8281111561097f578251825591602001919060010190610964565b5061098b9291506109c5565b5090565b50805461099b90610a72565b6000825580601f106109ab575050565b601f0160209004906000526020600020908101906108c491905b5b8082111561098b57600081556001016109c6565b6000604082840312156109ec57600080fd5b50919050565b600060408284031215610a0457600080fd5b610a0e83836109da565b9392505050565b82815260006020604081840152835180604085015260005b81811015610a4957858101830151858201606001528201610a2d565b81811115610a5b576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610a8657607f821691505b602082108114156109ec57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610abe57600080fd5b919050565b600060208284031215610ad557600080fd5b6040516020810181811067ffffffffffffffff82111715610b0657634e487b7160e01b600052604160045260246000fd5b604052610b1283610aa7565b81529392505050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610b4957600080fd5b80604085015250509392505050565b600060608284031215610b6a57600080fd5b6040516060810181811067ffffffffffffffff82111715610b9b57634e487b7160e01b600052604160045260246000fd5b604052610ba783610aa7565b8152610bb560208401610aa7565b6020820152604083015160408201528091505092915050565b6001600160a01b038316815260608101610a0e602083018480358252602090810135910152565b634e487b7160e01b600052601260045260246000fd5b600082610c1a57610c1a610bf5565b500690565b634e487b7160e01b600052601160045260246000fd5b600082821015610c4757610c47610c1f565b500390565b600082610c5b57610c5b610bf5565b500490565b60008219821115610c7357610c73610c1f565b500190565b81516001600160a01b03908116825260208084015190911690820152604091820151918101919091526060019056fea26469706673582212206b6d46eb05a6b930134516b28c690d6be95f828bfcf1fa2559b485d01ee1a37664736f6c634300080c0033`,
  BytecodeLen: 3897,
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
  3: {
    at: './index.rsh:68:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:32:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:36:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:51:16:after expr stmt semicolon',
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
