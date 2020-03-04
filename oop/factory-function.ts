function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return 'attack with ' + weapon
    }
  }
}

const peter = createElf('Peter', 'stones');
console.log(peter.attack());

const sam = createElf('Sam', 'fire');
console.log(sam.attack());
