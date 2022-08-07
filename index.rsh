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

  // write your program here
  exit();
});
