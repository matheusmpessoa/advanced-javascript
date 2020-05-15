const urls = [
  'http://jsonplaceholder.typicode.com/users',
  'http://jsonplaceholder.typicode.com/posts',
  'http://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
      const response = await fetch(url);
      return response.json();
    }))
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('oooops', err)
  }
}

const getData2 = async function() {
  const arrayOfPromises= urls.map(url => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
}
