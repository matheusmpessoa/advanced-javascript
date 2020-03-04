const elfFunctions = {
  attack() {
    return 'attack with ' + this.weapon
  }
}

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

let peter = createElf('Peter', 'Stones');
console.log(peter.attack());

let sam = createElf('Sam', 'Stones');
console.log(sam.attack());
