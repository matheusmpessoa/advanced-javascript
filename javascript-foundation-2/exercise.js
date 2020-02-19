/* Antes
const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter;
 
console.log('?', giveMeTheCharacterNOW()); */


/* Depois */
const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter();
 
//How Would you fix this?
console.log('?', giveMeTheCharacterNOW); //this should return 'Simon'