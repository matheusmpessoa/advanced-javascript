const urlBase = 'http://jsonplaceholder.typicode.com/'
const urls = [
  urlBase + 'users',
  urlBase + 'posts',
  urlBase + 'albums'
]

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
})).then(results => {
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
}).catch(() => console.log('error'));
