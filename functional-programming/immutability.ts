// Immutability
const obj = { name: 'Andrei' }
function clone(obj) {
  return {...obj} //this is pure
}

obj.name = 'Nana'

// dumb way to clone obj
function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = 'Nana';
  return obj2
}

const updateObj = updateName(obj);
console.log(obj, updateObj);
