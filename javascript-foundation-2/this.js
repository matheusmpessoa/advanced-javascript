var person = {
  firstName: "Penelope",
  lastName: "Barrymore",
  fullName: function () {
    // Uso do "this" tal como se usou "ele" no exemplo da frase anterior
    console.log(this.firstName + ' ' + this.lastName);

    // Utilizando o this para referência:
    console.log(person.firstName + ' ' + person.lastName);
  }
}
