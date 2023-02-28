/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
GOOD LUCK 
*/

const John = {
  firstName: "John",
  lastName: "Smith",
  mass: "92",
  height: "1.95",
  //JohnBMI: mass / height ** 2,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const Mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: "78",
  height: "1.69",
  // MarkBMI: mass / height ** 2,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

// calcBMI: function () {
//     John.BMI = John.mass / John.height ** 2,
//     return John.BMI;
//  };
John.calcBMI();
console.log(John.bmi);

Mark.calcBMI();
console.log(Mark.bmi);

if (Mark.bmi > John.bmi) {
  console.log(
    `${Mark.firstName}'s BMI (${Mark.bmi}) is bigger than ${John.firstName}'s BMI (${John.bmi})`
  );
} else {
  console.log(
    `${John.firstName}'s BMI (${John.bmi}) is bigger than ${Mark.firstName}'s BMI (${Mark.bmi})`
  );
}
