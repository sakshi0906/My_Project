// app.js

// Import the mathOperations module
const math = require('./mathOperations');

// Use the functions from the imported module
const resultAddition = math.add(10, 5);
console.log(`Addition: ${resultAddition}`);

const resultSubtraction = math.subtract(10, 5);
console.log(`Subtraction: ${resultSubtraction}`);

const resultMultiplication = math.multiply(10, 5);
console.log(`Multiplication: ${resultMultiplication}`);

const resultDivision = math.divide(10, 5);
console.log(`Division: ${resultDivision}`);