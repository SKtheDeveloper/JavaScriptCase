let firstNumber = 22
let secondNumber = 7

let result = (firstNumber)/(secondNumber)

console.log("Result is "+ result)

console.log("Result after floor " + Math.floor(result))  

console.log("Result after ceil " + Math.ceil(result))

console.log("This is a random number "+ Math.random());    // result as any random no. between 0 to 1

let upper = 25
let lower = 20

console.log(Math.floor(Math.random() * ((upper - lower) + 1))); // to get range between 0 to 5 

console.log((Math.floor(Math.random() * ((upper - lower) + 1)) + lower) ); //to get number between 20 to 25


// app for dice ..

let upperLimit = 6
let lowerLimit = 1

console.log("Dice Number is : " + (Math.floor(Math.random() * ((upperLimit - lowerLimit) + 1)) + lowerLimit) );

