// fetch
fetch('http://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json())
  .then(console.log())
  .then(console.info())


// async fetch
async function fetchUsers() {
  const resp = await fetch('http://jsonplaceholder.typicode.com/users')
  const data = await resp.json();
  console.log(data);
} // just call again fetchUsers on console

