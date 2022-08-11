'reach 0.1';

const playerA = {
  playGame: Fun([], UInt),
  receivePlay: Fun([UInt], Null),
  bJoined: Fun([], Null),
};

const playerB = {
  playGame: Fun([], UInt),
  receivePlay: Fun([UInt], Null),
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
  
  A.only(() => {
    interact.bJoined();
  });
  
  var turns = 0;
  invariant( balance() == 0);
  while (turns < 9) {
    commit();
    B.publish();

    if (turns % 2 == 1) {
      commit();

      B.only(() => {
        const pos = declassify ( interact.playGame() );
      });
      B.publish(pos);

      A.only(() => {
        interact.receivePlay( pos % 10 );
      });
      
      const move = (pos - (pos % 10)) / 10; // select first digit
      turns = turns + move;
      continue;
    } else {
      commit ();

      A.only(() => {
        const pos = declassify ( interact.playGame() );
      });
      A.publish(pos);
      B.only(() => {
        interact.receivePlay( pos % 10 );
      });

      const move = (pos - (pos % 10)) / 10; // select first digit
      turns = turns + move;
      continue;
    }
  }

  // write your program here
  commit();
  exit();
});
