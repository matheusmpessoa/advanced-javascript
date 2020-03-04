function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function() {
  return 'attack with ' + this.weapon
}

/*
Elf.prototype.attack = () => {
  return 'attack with ' + this.weapon
}
Retorna undefined pq arrowFunction é lexical, o this nao é encontrado
Ao usar function normal as propriedades globais são assistidas
*/

const joao = new Elf('Joao', 'glock');
const yuri = new Elf('Yuri', 'fire');
