'reach 0.1';

const player = {
  playGame: Fun([], UInt),
  receivePlay: Fun([UInt], Null),
}

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ...player,
  });
  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    ...player,
  });
  init();

  // The first one to publish deploys the contract
  A.publish();
  commit();
  // The second one to publish always attaches
  B.publish();
  commit();

  A.only(() => {
    const pos = declassify( interact.playGame() )
  });
  A.publish(pos);
  commit();

  B.only(() => {
    interact.receivePlay( pos );
  })
  A.publish();
  commit();

  // write your program here
  exit();
});
