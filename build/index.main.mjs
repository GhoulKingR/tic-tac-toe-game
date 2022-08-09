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
      2: [ctc0, ctc0],
      3: [ctc0, ctc0],
      4: [ctc0, ctc0],
      5: [ctc0, ctc0],
      6: [ctc0]
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
    lct: stdlib.checkedBigNumberify('./index.rsh:23:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v84, time: v83, didSend: v22, from: v82 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v84, time: v83, didSend: v22, from: v82 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v87, time: v86, didSend: v26, from: v85 } = txn2;
  ;
  stdlib.protect(ctc0, await interact.bJoined(), {
    at: './index.rsh:30:21:application',
    fs: ['at ./index.rsh:29:9:application call to [unknown function] (defined at: ./index.rsh:29:13:function exp)'],
    msg: 'bJoined',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v82, v85],
    evt_cnt: 0,
    funcNum: 2,
    lct: v86,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v92, time: v91, didSend: v34, from: v90 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v92, time: v91, didSend: v34, from: v90 } = txn3;
  ;
  const v93 = stdlib.addressEq(v82, v90);
  stdlib.assert(v93, {
    at: './index.rsh:32:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v96 = stdlib.protect(ctc1, await interact.playGame(), {
    at: './index.rsh:37:49:application',
    fs: ['at ./index.rsh:36:11:application call to [unknown function] (defined at: ./index.rsh:36:15:function exp)', 'at ./index.rsh:60:9:application call to "aPlays" (defined at: ./index.rsh:35:21:function exp)'],
    msg: 'playGame',
    who: 'Alice'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v82, v85, v96],
    evt_cnt: 1,
    funcNum: 3,
    lct: v91,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v98], secs: v100, time: v99, didSend: v45, from: v97 } = txn4;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v98], secs: v100, time: v99, didSend: v45, from: v97 } = txn4;
  ;
  const v101 = stdlib.addressEq(v82, v97);
  stdlib.assert(v101, {
    at: './index.rsh:39:7:dot',
    fs: ['at ./index.rsh:60:9:application call to "aPlays" (defined at: ./index.rsh:35:21:function exp)'],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v106, time: v105, didSend: v53, from: v104 } = txn5;
  ;
  const v107 = stdlib.addressEq(v85, v104);
  stdlib.assert(v107, {
    at: './index.rsh:44:7:dot',
    fs: ['at ./index.rsh:60:9:application call to "aPlays" (defined at: ./index.rsh:35:21:function exp)'],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 5,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v112], secs: v114, time: v113, didSend: v63, from: v111 } = txn6;
  ;
  const v115 = stdlib.addressEq(v85, v111);
  stdlib.assert(v115, {
    at: './index.rsh:51:7:dot',
    fs: ['at ./index.rsh:60:9:application call to "aPlays" (defined at: ./index.rsh:35:21:function exp)'],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.receivePlay(v112), {
    at: './index.rsh:54:27:application',
    fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:15:function exp)', 'at ./index.rsh:60:9:application call to "aPlays" (defined at: ./index.rsh:35:21:function exp)'],
    msg: 'receivePlay',
    who: 'Alice'
    });
  
  const txn7 = await (ctc.sendrecv({
    args: [v82],
    evt_cnt: 0,
    funcNum: 6,
    lct: v113,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:56:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn7) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v120, time: v119, didSend: v71, from: v118 } = txn7;
      
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
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v120, time: v119, didSend: v71, from: v118 } = txn7;
  ;
  const v121 = stdlib.addressEq(v82, v118);
  stdlib.assert(v121, {
    at: './index.rsh:56:7:dot',
    fs: ['at ./index.rsh:60:9:application call to "aPlays" (defined at: ./index.rsh:35:21:function exp)'],
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
  const {data: [], secs: v84, time: v83, didSend: v22, from: v82 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v82],
    evt_cnt: 0,
    funcNum: 1,
    lct: v83,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v87, time: v86, didSend: v26, from: v85 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v87, time: v86, didSend: v26, from: v85 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v92, time: v91, didSend: v34, from: v90 } = txn3;
  ;
  const v93 = stdlib.addressEq(v82, v90);
  stdlib.assert(v93, {
    at: './index.rsh:32:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v98], secs: v100, time: v99, didSend: v45, from: v97 } = txn4;
  ;
  const v101 = stdlib.addressEq(v82, v97);
  stdlib.assert(v101, {
    at: './index.rsh:39:7:dot',
    fs: ['at ./index.rsh:60:9:application call to "aPlays" (defined at: ./index.rsh:35:21:function exp)'],
    msg: 'sender correct',
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.receivePlay(v98), {
    at: './index.rsh:42:27:application',
    fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:15:function exp)', 'at ./index.rsh:60:9:application call to "aPlays" (defined at: ./index.rsh:35:21:function exp)'],
    msg: 'receivePlay',
    who: 'Bob'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v82, v85],
    evt_cnt: 0,
    funcNum: 4,
    lct: v99,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v106, time: v105, didSend: v53, from: v104 } = txn5;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v106, time: v105, didSend: v53, from: v104 } = txn5;
  ;
  const v107 = stdlib.addressEq(v85, v104);
  stdlib.assert(v107, {
    at: './index.rsh:44:7:dot',
    fs: ['at ./index.rsh:60:9:application call to "aPlays" (defined at: ./index.rsh:35:21:function exp)'],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v110 = stdlib.protect(ctc0, await interact.playGame(), {
    at: './index.rsh:49:50:application',
    fs: ['at ./index.rsh:48:11:application call to [unknown function] (defined at: ./index.rsh:48:15:function exp)', 'at ./index.rsh:60:9:application call to "aPlays" (defined at: ./index.rsh:35:21:function exp)'],
    msg: 'playGame',
    who: 'Bob'
    });
  
  const txn6 = await (ctc.sendrecv({
    args: [v82, v85, v110],
    evt_cnt: 1,
    funcNum: 5,
    lct: v105,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v112], secs: v114, time: v113, didSend: v63, from: v111 } = txn6;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v112], secs: v114, time: v113, didSend: v63, from: v111 } = txn6;
  ;
  const v115 = stdlib.addressEq(v85, v111);
  stdlib.assert(v115, {
    at: './index.rsh:51:7:dot',
    fs: ['at ./index.rsh:60:9:application call to "aPlays" (defined at: ./index.rsh:35:21:function exp)'],
    msg: 'sender correct',
    who: 'Bob'
    });
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 6,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v120, time: v119, didSend: v71, from: v118 } = txn7;
  ;
  const v121 = stdlib.addressEq(v82, v118);
  stdlib.assert(v121, {
    at: './index.rsh:56:7:dot',
    fs: ['at ./index.rsh:60:9:application call to "aPlays" (defined at: ./index.rsh:35:21:function exp)'],
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
  appApproval: `BiAHAAEFBgIDBCYCAQAAIjUAMRhBAlYpZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEFDEABGkkkDEAAdkklDEAAJyUSRCU0ARJENARJIhJMNAISEUQoZDUDgARhtKwMsDQDMQASREIBpUgkNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BRc1/oAEgaqazzT+FlCwNANXICAxABJENP8oSwFXACBnSCU1ATIGNQJCAXdJIQYMQABGSCEGNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf9XICA1/oAEkSc087A0/jEAEkQ0/zT+UChLAVcAQGdIJDUBMgY1AkIBKkghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/VyAgNf5JNQUXNf2ABNQMbNY0/RZQsDT/MQASRDT/NP5QKEsBVwBAZ0ghBjUBMgY1AkIA2UkjDEAAhUkhBAxAAEdIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/1cgIDX+gARBsUBNsDT/MQASRDT/NP5QKEsBVwBAZ0ghBTUBMgY1AkIAhUgjNAESRDQESSISTDQCEhFEKGRJNQM1/4AEmouRdLA0/zEAUChLAVcAQGdIIQQ1ATIGNQJCAE5IgaCNBogAmCI0ARJENARJIhJMNAISEUSABF8Nq/qwMQAoSwFXACBnSCM1ATIGNQJCABsxGSQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 64,
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v98",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
                "name": "v112",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
    "name": "_reach_e6",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v98",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
                "name": "v112",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200103f3803806200103f8339810160408190526200002691620001a4565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d4565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000cb929190620000fe565b5050506200024c565b81620000fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010c906200020f565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600060408284031215620001b757600080fd5b604080519081016001600160401b0381118282101715620001e857634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020357600080fd5b60208201529392505050565b600181811c908216806200022457607f821691505b602082108114156200024657634e487b7160e01b600052602260045260246000fd5b50919050565b610de3806200025c6000396000f3fe6080604052600436106100845760003560e01c8063832307571161005657806383230757146100ea578063a7661d54146100ff578063ab53f2c614610112578063c798003714610135578063f4cedab01461014857005b80631e93b0f11461008d5780632c10a159146100b1578063552d7b8e146100c45780637eea518c146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004610b94565b61015b565b61008b6100d2366004610b94565b6102d8565b61008b6100e5366004610b94565b61043f565b3480156100f657600080fd5b5060015461009e565b61008b61010d366004610b94565b6105b3565b34801561011e57600080fd5b5061012761072a565b6040516100a8929190610bb7565b61008b610143366004610b94565b6107c7565b61008b610156366004610b94565b61090d565b61016b6001600054146009610a81565b6101858135158061017e57506001548235145b600a610a81565b60008080556002805461019790610c14565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390610c14565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b50505050508060200190518101906102289190610c65565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161025b929190610cbd565b60405180910390a161026f34156008610a81565b6040805180820182526000808252602080830182815285516001600160a01b03168452339052600290915543600155915190916102ae91839101610cfa565b604051602081830303815290604052600290805190602001906102d2929190610aa6565b50505050565b6102e86005600054146019610a81565b610302813515806102fb57506001548235145b601a610a81565b60008080556002805461031490610c14565b80601f016020809104026020016040519081016040528092919081815260200182805461034090610c14565b801561038d5780601f106103625761010080835404028352916020019161038d565b820191906000526020600020905b81548152906001019060200180831161037057829003601f168201915b50505050508060200190518101906103a59190610d1d565b90507f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d333836040516103d8929190610d86565b60405180910390a16103ec34156017610a81565b6020810151610407906001600160a01b031633146018610a81565b60408051602081019091526000815281516001600160a01b0316808252600660005543600155604080516020810192909252016102ae565b61044f600260005414600d610a81565b6104698135158061046257506001548235145b600e610a81565b60008080556002805461047b90610c14565b80601f01602080910402602001604051908101604052809291908181526020018280546104a790610c14565b80156104f45780601f106104c9576101008083540402835291602001916104f4565b820191906000526020600020905b8154815290600101906020018083116104d757829003601f168201915b505050505080602001905181019061050c9190610d1d565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161053f929190610cbd565b60405180910390a16105533415600b610a81565b805161056b906001600160a01b03163314600c610a81565b604080518082019091526000808252602082015281516001600160a01b039081168252602080840151909116818301526003600055436001556040516102ae91839101610cfa565b6105c36004600054146015610a81565b6105dd813515806105d657506001548235145b6016610a81565b6000808055600280546105ef90610c14565b80601f016020809104026020016040519081016040528092919081815260200182805461061b90610c14565b80156106685780601f1061063d57610100808354040283529160200191610668565b820191906000526020600020905b81548152906001019060200180831161064b57829003601f168201915b50505050508060200190518101906106809190610d1d565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516106b3929190610cbd565b60405180910390a16106c734156013610a81565b60208101516106e2906001600160a01b031633146014610a81565b604080518082019091526000808252602082015281516001600160a01b039081168252602080840151909116818301526005600055436001556040516102ae91839101610cfa565b60006060600054600280805461073f90610c14565b80601f016020809104026020016040519081016040528092919081815260200182805461076b90610c14565b80156107b85780601f1061078d576101008083540402835291602001916107b8565b820191906000526020600020905b81548152906001019060200180831161079b57829003601f168201915b50505050509050915091509091565b6107d7600660005414601d610a81565b6107f1813515806107ea57506001548235145b601e610a81565b60008080556002805461080390610c14565b80601f016020809104026020016040519081016040528092919081815260200182805461082f90610c14565b801561087c5780601f106108515761010080835404028352916020019161087c565b820191906000526020600020905b81548152906001019060200180831161085f57829003601f168201915b50505050508060200190518101906108949190610c65565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae33836040516108c7929190610cbd565b60405180910390a16108db3415601b610a81565b80516108f3906001600160a01b03163314601c610a81565b6000808055600181905561090990600290610b2a565b5050565b61091d6003600054146011610a81565b6109378135158061093057506001548235145b6012610a81565b60008080556002805461094990610c14565b80601f016020809104026020016040519081016040528092919081815260200182805461097590610c14565b80156109c25780601f10610997576101008083540402835291602001916109c2565b820191906000526020600020905b8154815290600101906020018083116109a557829003601f168201915b50505050508060200190518101906109da9190610d1d565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc13383604051610a0d929190610d86565b60405180910390a1610a213415600f610a81565b8051610a39906001600160a01b031633146010610a81565b604080518082019091526000808252602082015281516001600160a01b039081168252602080840151909116818301526004600055436001556040516102ae91839101610cfa565b816109095760405163100960cb60e01b81526004810182905260240160405180910390fd5b828054610ab290610c14565b90600052602060002090601f016020900481019282610ad45760008555610b1a565b82601f10610aed57805160ff1916838001178555610b1a565b82800160010185558215610b1a579182015b82811115610b1a578251825591602001919060010190610aff565b50610b26929150610b67565b5090565b508054610b3690610c14565b6000825580601f10610b46575050565b601f016020900490600052602060002090810190610b649190610b67565b50565b5b80821115610b265760008155600101610b68565b600060408284031215610b8e57600080fd5b50919050565b600060408284031215610ba657600080fd5b610bb08383610b7c565b9392505050565b82815260006020604081840152835180604085015260005b81811015610beb57858101830151858201606001528201610bcf565b81811115610bfd576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610c2857607f821691505b60208210811415610b8e57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610c6057600080fd5b919050565b600060208284031215610c7757600080fd5b6040516020810181811067ffffffffffffffff82111715610ca857634e487b7160e01b600052604160045260246000fd5b604052610cb483610c49565b81529392505050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610ceb57600080fd5b80604085015250509392505050565b81516001600160a01b039081168252602092830151169181019190915260400190565b600060408284031215610d2f57600080fd5b6040516040810181811067ffffffffffffffff82111715610d6057634e487b7160e01b600052604160045260246000fd5b604052610d6c83610c49565b8152610d7a60208401610c49565b60208201529392505050565b6001600160a01b038316815260608101610bb060208301848035825260209081013591015256fea26469706673582212200b7247bb67ec731a44e8d69e8075fd5e4676dec41bec50d01ab6b45d5f60e74764736f6c634300080c0033`,
  BytecodeLen: 4159,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:24:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:27:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:33:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:40:13:after expr stmt semicolon',
    fs: ['at ./index.rsh:60:9:application call to "aPlays" (defined at: ./index.rsh:35:21:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:45:13:after expr stmt semicolon',
    fs: ['at ./index.rsh:60:9:application call to "aPlays" (defined at: ./index.rsh:35:21:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:52:13:after expr stmt semicolon',
    fs: ['at ./index.rsh:60:9:application call to "aPlays" (defined at: ./index.rsh:35:21:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:57:13:after expr stmt semicolon',
    fs: ['at ./index.rsh:60:9:application call to "aPlays" (defined at: ./index.rsh:35:21:function exp)'],
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
