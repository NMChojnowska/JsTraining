// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

const MarksWeight = 78;
const MarksHeight = 1.69;
const JohnsWeight = 92;
const JohnsHeight = 1.95;
const MarkBMI = MarksWeight / MarksHeight ** 2;
const JohnsBMI = JohnsWeight / JohnsHeight ** 2;
console.log(MarkBMI);
console.log(JohnsBMI);
console.log("MarkBMI " + MarkBMI);
console.log("JohnsBMI " + JohnsBMI);
let markHigherBMI = MarkBMI > JohnsBMI;
console.log(markHigherBMI);

if (MarkBMI > JohnsBMI) {
  console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnsBMI})!`);
} else {
  console.log(`John's BMI (${JohnsBMI}) is higher than Mark's (${MarkBMI})!`);
}
