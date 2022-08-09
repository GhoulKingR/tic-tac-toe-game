'reach 0.1';

const player = {
  playGame: Fun([], UInt),
  receivePlay: Fun([UInt], Null),
};

const playerA = {
  ...player,
  bJoined: Fun([], Null),
};

const playerB = {
  ...player,
};

export const main = Reach.App(() => {
  const A = Participant('Alice', playerA);
  const B = Participant('Bob', playerB);
  init();

  // The first one to publish deploys the contract
  A.publish();
  commit();
  // The second one to publish always attaches
  B.publish();
  commit();

  A.only(() => {
    interact.bJoined();
  });
  A.publish();
  commit();

  const aPlays = (fun, n) => {
    A.only(() => {
      const pos = declassify ( interact.playGame() );
    });
    A.publish(pos);
    commit();
    B.only(() => {
      interact.receivePlay( pos );
    });
    B.publish();
    commit();

    
    B.only(() => {
      const pos2 = declassify ( interact.playGame() );
    });
    B.publish(pos2);
    commit();
    A.only(() => {
      interact.receivePlay( pos2 );
    });
    A.publish();
    commit();

    if (n > 0) return fun(fun, 9);
    else return null;
  }

  aPlays(aPlays, 9);

  // write your program here
  exit();
});
