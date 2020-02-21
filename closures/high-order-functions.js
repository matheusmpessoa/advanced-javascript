const giveAccesTo = (name) =>
  'Acess Greanted to ' + name

function authenticate(verify) {
  let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i);
  }
  return true;
}

function sing(person) {
  return 'Lalalala my name is' + person.name;
}

function letPerson(person, fn) {
  if (person.level === 'admin') {
    fn(500000)
  } else if (person.level === 'user') {
    fn(100000)
  }
  return giveAccesTo(person.name);
}

letPerson({
  level: 'admin',
  name: 'Sally'
}, sing);
