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
      3: [ctc0, ctc0],
      4: [ctc0],
      6: [ctc0, ctc0, ctc1],
      7: [ctc0, ctc0, ctc1],
      8: [ctc0, ctc0, ctc1]
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
    lct: stdlib.checkedBigNumberify('./index.rsh:24:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:24:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v116, time: v115, didSend: v22, from: v114 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v116, time: v115, didSend: v22, from: v114 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v119, time: v118, didSend: v26, from: v117 } = txn2;
  ;
  stdlib.protect(ctc0, await interact.bJoined(), {
    at: './index.rsh:30:21:application',
    fs: ['at ./index.rsh:29:9:application call to [unknown function] (defined at: ./index.rsh:29:13:function exp)'],
    msg: 'bJoined',
    who: 'Alice'
    });
  
  let v122 = stdlib.checkedBigNumberify('./index.rsh:33:15:decimal', stdlib.UInt_max, '0');
  let v123 = v118;
  
  while (await (async () => {
    const v133 = stdlib.lt(v122, stdlib.checkedBigNumberify('./index.rsh:35:18:decimal', stdlib.UInt_max, '9'));
    
    return v133;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v136, time: v135, didSend: v40, from: v134 } = txn3;
    ;
    const v137 = stdlib.addressEq(v117, v134);
    stdlib.assert(v137, {
      at: './index.rsh:37:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v138 = stdlib.mod(v122, stdlib.checkedBigNumberify('./index.rsh:39:17:decimal', stdlib.UInt_max, '2'));
    const v139 = stdlib.eq(v138, stdlib.checkedBigNumberify('./index.rsh:39:22:decimal', stdlib.UInt_max, '1'));
    if (v139) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v144], secs: v146, time: v145, didSend: v52, from: v143 } = txn4;
      ;
      const v147 = stdlib.addressEq(v117, v143);
      stdlib.assert(v147, {
        at: './index.rsh:45:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v150 = stdlib.mod(v144, stdlib.checkedBigNumberify('./index.rsh:48:37:decimal', stdlib.UInt_max, '10'));
      stdlib.protect(ctc0, await interact.receivePlay(v150), {
        at: './index.rsh:48:29:application',
        fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:17:function exp)'],
        msg: 'receivePlay',
        who: 'Alice'
        });
      
      const v152 = stdlib.sub(v144, v150);
      const v153 = stdlib.div(v152, stdlib.checkedBigNumberify('./index.rsh:51:41:decimal', stdlib.UInt_max, '10'));
      const v154 = stdlib.add(v122, v153);
      const cv122 = v154;
      const cv123 = v145;
      
      v122 = cv122;
      v123 = cv123;
      
      continue;
      
      }
    else {
      const v157 = stdlib.protect(ctc1, await interact.playGame(), {
        at: './index.rsh:58:51:application',
        fs: ['at ./index.rsh:57:13:application call to [unknown function] (defined at: ./index.rsh:57:17:function exp)'],
        msg: 'playGame',
        who: 'Alice'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v114, v117, v122, v157],
        evt_cnt: 1,
        funcNum: 7,
        lct: v135,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:60:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v159], secs: v161, time: v160, didSend: v70, from: v158 } = txn4;
          
          ;
          const v166 = stdlib.mod(v159, stdlib.checkedBigNumberify('./index.rsh:65:34:decimal', stdlib.UInt_max, '10'));
          const v167 = stdlib.sub(v159, v166);
          const v168 = stdlib.div(v167, stdlib.checkedBigNumberify('./index.rsh:65:41:decimal', stdlib.UInt_max, '10'));
          const v169 = stdlib.add(v122, v168);
          const cv122 = v169;
          const cv123 = v160;
          
          await (async () => {
            const v122 = cv122;
            const v123 = cv123;
            
            if (await (async () => {
              const v133 = stdlib.lt(v122, stdlib.checkedBigNumberify('./index.rsh:35:18:decimal', stdlib.UInt_max, '9'));
              
              return v133;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc2, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v159], secs: v161, time: v160, didSend: v70, from: v158 } = txn4;
      ;
      const v162 = stdlib.addressEq(v114, v158);
      stdlib.assert(v162, {
        at: './index.rsh:60:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v166 = stdlib.mod(v159, stdlib.checkedBigNumberify('./index.rsh:65:34:decimal', stdlib.UInt_max, '10'));
      const v167 = stdlib.sub(v159, v166);
      const v168 = stdlib.div(v167, stdlib.checkedBigNumberify('./index.rsh:65:41:decimal', stdlib.UInt_max, '10'));
      const v169 = stdlib.add(v122, v168);
      const cv122 = v169;
      const cv123 = v160;
      
      v122 = cv122;
      v123 = cv123;
      
      continue;
      
      }
    
    }
  stdlib.protect(ctc0, await interact.gameOver(v122), {
    at: './index.rsh:73:22:application',
    fs: ['at ./index.rsh:72:9:application call to [unknown function] (defined at: ./index.rsh:72:13:function exp)'],
    msg: 'gameOver',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v114, v117],
    evt_cnt: 0,
    funcNum: 3,
    lct: v123,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:75:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v174, time: v173, didSend: v86, from: v172 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v174, time: v173, didSend: v86, from: v172 } = txn3;
  ;
  const v175 = stdlib.addressEq(v114, v172);
  stdlib.assert(v175, {
    at: './index.rsh:75:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v180, time: v179, didSend: v94, from: v178 } = txn4;
  ;
  const v181 = stdlib.addressEq(v117, v178);
  stdlib.assert(v181, {
    at: './index.rsh:81:5:dot',
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
  const {data: [], secs: v116, time: v115, didSend: v22, from: v114 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v114],
    evt_cnt: 0,
    funcNum: 1,
    lct: v115,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:27:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v119, time: v118, didSend: v26, from: v117 } = txn2;
      
      ;
      const v122 = stdlib.checkedBigNumberify('./index.rsh:33:15:decimal', stdlib.UInt_max, '0');
      const v123 = v118;
      
      if (await (async () => {
        const v133 = stdlib.lt(v122, stdlib.checkedBigNumberify('./index.rsh:35:18:decimal', stdlib.UInt_max, '9'));
        
        return v133;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v119, time: v118, didSend: v26, from: v117 } = txn2;
  ;
  let v122 = stdlib.checkedBigNumberify('./index.rsh:33:15:decimal', stdlib.UInt_max, '0');
  let v123 = v118;
  
  while (await (async () => {
    const v133 = stdlib.lt(v122, stdlib.checkedBigNumberify('./index.rsh:35:18:decimal', stdlib.UInt_max, '9'));
    
    return v133;})()) {
    const txn3 = await (ctc.sendrecv({
      args: [v114, v117, v122],
      evt_cnt: 0,
      funcNum: 5,
      lct: v123,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:37:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v136, time: v135, didSend: v40, from: v134 } = txn3;
        
        ;
        const v138 = stdlib.mod(v122, stdlib.checkedBigNumberify('./index.rsh:39:17:decimal', stdlib.UInt_max, '2'));
        const v139 = stdlib.eq(v138, stdlib.checkedBigNumberify('./index.rsh:39:22:decimal', stdlib.UInt_max, '1'));
        if (v139) {
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
    const {data: [], secs: v136, time: v135, didSend: v40, from: v134 } = txn3;
    ;
    const v137 = stdlib.addressEq(v117, v134);
    stdlib.assert(v137, {
      at: './index.rsh:37:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v138 = stdlib.mod(v122, stdlib.checkedBigNumberify('./index.rsh:39:17:decimal', stdlib.UInt_max, '2'));
    const v139 = stdlib.eq(v138, stdlib.checkedBigNumberify('./index.rsh:39:22:decimal', stdlib.UInt_max, '1'));
    if (v139) {
      const v142 = stdlib.protect(ctc0, await interact.playGame(), {
        at: './index.rsh:43:51:application',
        fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:17:function exp)'],
        msg: 'playGame',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v114, v117, v122, v142],
        evt_cnt: 1,
        funcNum: 6,
        lct: v135,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:45:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v144], secs: v146, time: v145, didSend: v52, from: v143 } = txn4;
          
          ;
          const v151 = stdlib.mod(v144, stdlib.checkedBigNumberify('./index.rsh:51:34:decimal', stdlib.UInt_max, '10'));
          const v152 = stdlib.sub(v144, v151);
          const v153 = stdlib.div(v152, stdlib.checkedBigNumberify('./index.rsh:51:41:decimal', stdlib.UInt_max, '10'));
          const v154 = stdlib.add(v122, v153);
          const cv122 = v154;
          const cv123 = v145;
          
          await (async () => {
            const v122 = cv122;
            const v123 = cv123;
            
            if (await (async () => {
              const v133 = stdlib.lt(v122, stdlib.checkedBigNumberify('./index.rsh:35:18:decimal', stdlib.UInt_max, '9'));
              
              return v133;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc1, ctc1, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v144], secs: v146, time: v145, didSend: v52, from: v143 } = txn4;
      ;
      const v147 = stdlib.addressEq(v117, v143);
      stdlib.assert(v147, {
        at: './index.rsh:45:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v151 = stdlib.mod(v144, stdlib.checkedBigNumberify('./index.rsh:51:34:decimal', stdlib.UInt_max, '10'));
      const v152 = stdlib.sub(v144, v151);
      const v153 = stdlib.div(v152, stdlib.checkedBigNumberify('./index.rsh:51:41:decimal', stdlib.UInt_max, '10'));
      const v154 = stdlib.add(v122, v153);
      const cv122 = v154;
      const cv123 = v145;
      
      v122 = cv122;
      v123 = cv123;
      
      continue;
      
      }
    else {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 7,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v159], secs: v161, time: v160, didSend: v70, from: v158 } = txn4;
      ;
      const v162 = stdlib.addressEq(v114, v158);
      stdlib.assert(v162, {
        at: './index.rsh:60:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v165 = stdlib.mod(v159, stdlib.checkedBigNumberify('./index.rsh:62:37:decimal', stdlib.UInt_max, '10'));
      stdlib.protect(ctc2, await interact.receivePlay(v165), {
        at: './index.rsh:62:29:application',
        fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:17:function exp)'],
        msg: 'receivePlay',
        who: 'Bob'
        });
      
      const v167 = stdlib.sub(v159, v165);
      const v168 = stdlib.div(v167, stdlib.checkedBigNumberify('./index.rsh:65:41:decimal', stdlib.UInt_max, '10'));
      const v169 = stdlib.add(v122, v168);
      const cv122 = v169;
      const cv123 = v160;
      
      v122 = cv122;
      v123 = cv123;
      
      continue;
      
      }
    
    }
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v174, time: v173, didSend: v86, from: v172 } = txn3;
  ;
  const v175 = stdlib.addressEq(v114, v172);
  stdlib.assert(v175, {
    at: './index.rsh:75:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  stdlib.protect(ctc2, await interact.gameOver(v122), {
    at: './index.rsh:79:22:application',
    fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:13:function exp)'],
    msg: 'gameOver',
    who: 'Bob'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v117],
    evt_cnt: 0,
    funcNum: 4,
    lct: v173,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:81:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v180, time: v179, didSend: v94, from: v178 } = txn4;
      
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
  const {data: [], secs: v180, time: v179, didSend: v94, from: v178 } = txn4;
  ;
  const v181 = stdlib.addressEq(v117, v178);
  stdlib.assert(v181, {
    at: './index.rsh:81:5:dot',
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
  appApproval: `BiALAAEHCggEBkADBQImAgEAACI1ADEYQQK3KWRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBQxAAUtJIQYMQAChSSQMQABPJBJEIQQ0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFFzX+gARxqLGjNP4WULA0/zEAEkQ0/zQDVyAgNAMhB1s0/kklGAklCggyBkIBmEgkNAESRDQESSISTDQCEhFEKGRJNQNXICA1/0k1BRc1/oAEcO3vejT+FlCwNP8xABJENANXACA0/zQDIQdbNP5JJRgJJQoIMgZCAUxJIQkMQAB2SCEGNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/VyAgNf4hB1s1/YAEzJmSXLA0/jEAEkQ0/SEKGCMSQQAbNP80/lA0/RZQKEsBVwBIZ0gkNQEyBjUCQgFLNP80/lA0/RZQKEsBVwBIZ0ghBDUBMgY1AkIBL0ghBTQBEkQ0BEkiEkw0AhIRRChkNQOABJEnNPOwNAMxABJEQgDtSSMMQABwSSEIDEAAQUghCDQBEkQ0BEkiEkw0AhIRRChkSTUDVyAgNf+ABKdlxLSwNANXACAxABJENP8oSwFXACBnSCEFNQEyBjUCQgC7IxJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABJqLkXSwNAMxACIyBkIAM0iBoI0GiADdIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAxAChLAVcAIGdIIzUBMgY1AkIAYDX/Nf41/TX8NP6BCQxBABw0/DT9UDT+FlAoSwFXAEhnSCEGNQEyBjUCQgA0NPw0/VAoSwFXAEBnSCEINQEyBjUCQgAcMRkhCRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEKMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
                "name": "v159",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
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
                "name": "v159",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620012e0380380620012e08339810160408190526200002691620001a4565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d4565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000cb929190620000fe565b5050506200024c565b81620000fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010c906200020f565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600060408284031215620001b757600080fd5b604080519081016001600160401b0381118282101715620001e857634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020357600080fd5b60208201529392505050565b600181811c908216806200022457607f821691505b602082108114156200024657634e487b7160e01b600052602260045260246000fd5b50919050565b611084806200025c6000396000f3fe6080604052600436106100845760003560e01c8063832307571161005657806383230757146100ea5780638e314769146100ff578063980b6eac14610112578063a7661d5414610125578063ab53f2c61461013857005b80631e93b0f11461008d5780632c10a159146100b15780636cec5d46146100c457806373b4522c146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004610d12565b61015b565b61008b6100d2366004610d12565b6102ad565b61008b6100e5366004610d12565b610455565b3480156100f657600080fd5b5060015461009e565b61008b61010d366004610d12565b6105de565b61008b610120366004610d12565b6107d0565b61008b610133366004610d12565b6108ff565b34801561014457600080fd5b5061014d610a41565b6040516100a8929190610d35565b61016b6001600054146009610ade565b6101858135158061017e57506001548235145b600a610ade565b60008080556002805461019790610d92565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390610d92565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b50505050508060200190518101906102289190610e3d565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161025b929190610e59565b60405180910390a161026f34156008610ade565b610277610be7565b815181516001600160a01b03909116905280513360209182015280820180516000905251439101526102a881610b03565b505050565b6102bd600860005414601d610ade565b6102d7813515806102d057506001548235145b601e610ade565b6000808055600280546102e990610d92565b80601f016020809104026020016040519081016040528092919081815260200182805461031590610d92565b80156103625780601f1061033757610100808354040283529160200191610362565b820191906000526020600020905b81548152906001019060200180831161034557829003601f168201915b505050505080602001905181019061037a9190610e96565b90507fcf1141db81cf673bada35f0f89f1438399a69251ff5f66f15c1433b39ac0ad7433836040516103ad929190610f0c565b60405180910390a16103c13415601b610ade565b80516103d9906001600160a01b03163314601c610ade565b6103e1610be7565b815181516001600160a01b0391821690526020808401518351921691810191909152600a90610414908290860135610f49565b610422906020860135610f73565b61042c9190610f8a565b826040015161043b9190610f9e565b60208083018051929092529051439101526102a881610b03565b610465600360005414600d610ade565b61047f8135158061047857506001548235145b600e610ade565b60008080556002805461049190610d92565b80601f01602080910402602001604051908101604052809291908181526020018280546104bd90610d92565b801561050a5780601f106104df5761010080835404028352916020019161050a565b820191906000526020600020905b8154815290600101906020018083116104ed57829003601f168201915b50505050508060200190518101906105229190610fb6565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63383604051610555929190610e59565b60405180910390a16105693415600b610ade565b8051610581906001600160a01b03163314600c610ade565b60408051602080820183526000808352848201516001600160a01b03168084526004909155436001558351918201529091015b604051602081830303815290604052600290805190602001906105d8929190610c2b565b50505050565b6105ee6006600054146015610ade565b6106088135158061060157506001548235145b6016610ade565b60008080556002805461061a90610d92565b80601f016020809104026020016040519081016040528092919081815260200182805461064690610d92565b80156106935780601f1061066857610100808354040283529160200191610693565b820191906000526020600020905b81548152906001019060200180831161067657829003601f168201915b50505050508060200190518101906106ab9190610e96565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516106de929190610e59565b60405180910390a16106f234156013610ade565b602081015161070d906001600160a01b031633146014610ade565b6001600282604001516107209190610f49565b141561077957604080516060810182526000808252602080830182815283850183815286516001600160a01b0390811686528784015116909152858501519052600790915543600155915190916105b49183910161101f565b604080516060810182526000808252602080830182815283850183815286516001600160a01b0390811686528784015116909152858501519052600890915543600155915190916105b49183910161101f565b5050565b6107e06007600054146019610ade565b6107fa813515806107f357506001548235145b601a610ade565b60008080556002805461080c90610d92565b80601f016020809104026020016040519081016040528092919081815260200182805461083890610d92565b80156108855780601f1061085a57610100808354040283529160200191610885565b820191906000526020600020905b81548152906001019060200180831161086857829003601f168201915b505050505080602001905181019061089d9190610e96565b90507fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c33836040516108d0929190610f0c565b60405180910390a16108e434156017610ade565b60208101516103d9906001600160a01b031633146018610ade565b61090f6004600054146011610ade565b6109298135158061092257506001548235145b6012610ade565b60008080556002805461093b90610d92565b80601f016020809104026020016040519081016040528092919081815260200182805461096790610d92565b80156109b45780601f10610989576101008083540402835291602001916109b4565b820191906000526020600020905b81548152906001019060200180831161099757829003601f168201915b50505050508060200190518101906109cc9190610e3d565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516109ff929190610e59565b60405180910390a1610a133415600f610ade565b8051610a2b906001600160a01b031633146010610ade565b600080805560018190556107cc90600290610caf565b600060606000546002808054610a5690610d92565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8290610d92565b8015610acf5780601f10610aa457610100808354040283529160200191610acf565b820191906000526020600020905b815481529060010190602001808311610ab257829003601f168201915b50505050509050915091509091565b816107cc5760405163100960cb60e01b81526004810182905260240160405180910390fd5b60208101515160091115610b8b5760408051606081018252600080825260208083018281528385018381528651516001600160a01b0390811686528751840151169091528582015151905260069091554360015591519091610b679183910161101f565b604051602081830303815290604052600290805190602001906102a8929190610c2b565b60408051808201909152600080825260208201528151516001600160a01b039081168083528351602090810151831681850190815260036000554360015560408051928301939093525190921690820152606001610b67565b50565b60408051608081018252600091810182815260608201929092529081908152602001610c26604051806040016040528060008152602001600081525090565b905290565b828054610c3790610d92565b90600052602060002090601f016020900481019282610c595760008555610c9f565b82601f10610c7257805160ff1916838001178555610c9f565b82800160010185558215610c9f579182015b82811115610c9f578251825591602001919060010190610c84565b50610cab929150610ce5565b5090565b508054610cbb90610d92565b6000825580601f10610ccb575050565b601f016020900490600052602060002090810190610be491905b5b80821115610cab5760008155600101610ce6565b600060408284031215610d0c57600080fd5b50919050565b600060408284031215610d2457600080fd5b610d2e8383610cfa565b9392505050565b82815260006020604081840152835180604085015260005b81811015610d6957858101830151858201606001528201610d4d565b81811115610d7b576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610da657607f821691505b60208210811415610d0c57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610dde57600080fd5b919050565b600060208284031215610df557600080fd5b6040516020810181811067ffffffffffffffff82111715610e2657634e487b7160e01b600052604160045260246000fd5b604052905080610e3583610dc7565b905292915050565b600060208284031215610e4f57600080fd5b610d2e8383610de3565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610e8757600080fd5b80604085015250509392505050565b600060608284031215610ea857600080fd5b6040516060810181811067ffffffffffffffff82111715610ed957634e487b7160e01b600052604160045260246000fd5b604052610ee583610dc7565b8152610ef360208401610dc7565b6020820152604083015160408201528091505092915050565b6001600160a01b038316815260608101610d2e602083018480358252602090810135910152565b634e487b7160e01b600052601260045260246000fd5b600082610f5857610f58610f33565b500690565b634e487b7160e01b600052601160045260246000fd5b600082821015610f8557610f85610f5d565b500390565b600082610f9957610f99610f33565b500490565b60008219821115610fb157610fb1610f5d565b500190565b600060408284031215610fc857600080fd5b6040516040810181811067ffffffffffffffff82111715610ff957634e487b7160e01b600052604160045260246000fd5b60405261100583610dc7565b815261101360208401610dc7565b60208201529392505050565b81516001600160a01b03908116825260208084015190911690820152604091820151918101919091526060019056fea2646970667358221220ef014c77957d2dbf5b575181949fe379108fc73623004752a7c60708ab2b710364736f6c634300080c0033`,
  BytecodeLen: 4832,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:25:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:70:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:76:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:82:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:36:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:40:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:55:16:after expr stmt semicolon',
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
