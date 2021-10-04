'use strict';

const MONEY = 11;
const COIN = [1, 2, 10, 5];
const ANSWER = [];

const checkLastMoney = (money, coin) => {
  let temp = money;
  let count = 0;

  coin.sort().reverse();
  console.log(coin);

  while (temp > 0) {
    while (temp - coin[count] >= 0) {
      temp -= coin[count];
      ANSWER.push(coin[count]);
    }
    count++;
  }
};
checkLastMoney(MONEY, COIN);

console.log(ANSWER);
