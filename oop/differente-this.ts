// new binding this
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Xavier', 55);
person1;

// implicit binding
const person2 = {
  name: 'Karen',
  age: 40,
  hi() {
    console.log('hi', this.name);
  }
}

// explicit binding
const person3 = {
  name: 'Peter',
  age: 28,
  hi: function () {
    console.log('hi', this.setTimeout);
  }.bind(window)
}
person3.hi();

// arrow function
const person4 = {
  name: 'Jason',
  age: 35,
  hi: function () {
    var inner = () => {
      console.log('hello', this.name);
    }
    return inner();
  }
}
person4.hi();