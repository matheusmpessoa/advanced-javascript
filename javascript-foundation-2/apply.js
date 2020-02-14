const wizard = {
  name: 'Merlin',
  health: 100,
  heal(num1, num2) {
    return this.health += num1 + num2;
  }
}

const archer = {
  name: 'Robin Hood',
  health: 30
}

console.log('1', archer);
const healArcher = wizard.heal.b
wizard.heal.apply(archer, [50, 30]);
console.log('2', archer);



// Outro exemplo
const array = [1, 2, 3];

function getMaxNumber(arr) {
  return Math.max.apply(null, arr);
}

getMaxNumber(array);