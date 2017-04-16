/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
console.log("hello");

var allCoins = 0.67;
var left = 0;

function coinCounter (amount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
  	quarters: 2,
  	dimes: 1,
  	nickels: 1,
  	pennies: 2,
  };

 coinPurse.quarters = Math.floor(allCoins / .25);
    money = allCoins - (.25 * coinPurse.quarters);
  coinPurse.dimes = Math.floor(allCoins / .1);
  	money = allCoins - (.1 * coinPurse.dimes);
 coinPurse.nickels = Math.floor(allCoins / .05);
 	money = allCoins -(.05 * coinPurse.nickels);
 coinPurse.pennies = Math.floor(allCoins / .01);
 	momey = allCoins - Math.floor(.01 - allCoins.pennies)

  coinPurse.quarters = 2;

  return coinPurse;
}

var coins = coinCounter(allCoins);
console.log(coins);
