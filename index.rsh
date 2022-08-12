'reach 0.1';

const player = {
  playGame: Fun([], UInt),
  receivePlay: Fun([UInt], Null),
  gameOver: Fun([UInt], Null),
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
  commit();
  
  A.only(() => {
    interact.gameOver(turns);
  });
  A.publish();
  commit();

  B.only(() => {
    interact.gameOver(turns);
  });
  B.publish();
  commit();

  // write your program here
  exit();
});
