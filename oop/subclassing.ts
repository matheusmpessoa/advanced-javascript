class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return 'attack with ' + this.weapon;
  }
}

class Smurf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    return 'Strongest fort in the world';
  }
}

const dolby = new Smurf('Dolby', 'cloth', 'house');
console.log(dolby.attack());

const shrek = new Ogre('Shrek', 'Club', 'green');
console.log(shrek.makeFort());
