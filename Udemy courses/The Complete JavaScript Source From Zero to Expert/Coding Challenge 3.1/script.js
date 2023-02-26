/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:


1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores
*/

const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

console.log(avgDolphins1);
console.log(avgKoalas1);

const checkWinner = function (avgDolphins1, avgKoalas1) {
  if (avgDolphins1 >= 2 * avgKoalas1) {
    console.log(
      `Dolphins with ${avgDolphins1} points are better than Koalas with ${avgKoalas1} points! 🎉`
    );
  } else {
    console.log(`Koalas with ${avgKoalas1} points are losing!😥`);
  }
};

checkWinner(avgDolphins1, avgKoalas1);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
console.log(avgDolphins2);
console.log(avgKoalas2);

if (avgDolphins2 >= 2 * avgKoalas2) {
  console.log(
    `Dolphins with ${avgDolphins2} points are better than Koalas with ${avgKoalas2} points! 🎉`
  );
} else {
  console.log(`Koalas with ${avgKoalas2} points are losing!😥`);
}
