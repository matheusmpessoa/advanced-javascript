// currying
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(5)(3);

// currying functions
const curriedMultiplyBy5 = curriedMultiply(5);
curriedMultiplyBy5(4);
