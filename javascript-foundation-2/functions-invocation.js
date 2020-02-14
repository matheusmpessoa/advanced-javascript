// Function Expression
var canada = function() {
  console.log('cold');
}

// Function Declaration
function india() {
  console.log('cold');
}

// Function invocation/call/execution
canada(); //execution context criado
india();



// Function with arguments
function marry(person1, person2) {
  return `${person1} is married with ${person2}`;
}
marry('Tim', 'Tina');
