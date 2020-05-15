const urls = [
  'http://jsonplaceholder.typicode.com/users',
  'http://jsonplaceholder.typicode.com/posts',
  'http://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
})).then(results => {
  console.log('users', results[0]);
  console.log('posts', results[1]);
  console.log('albums', results[2]);
}).catch(() => console.log('error'));

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url => 
      fetch(url).then(resp => resp.json())
    ))
    console.log('users', results[0]);
    console.log('posts', results[1]);
    console.log('albums', results[2]);
  } catch (err) {
    console.log('oops', err)
  }
}
