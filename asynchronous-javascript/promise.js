const promise = new Promise((resolve, reject) => {
  if(true) {
    resolve('Stuff worked');
  } else {
    reject('Error, it broke');
  }
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'HII')
})

promise
  .then(result => console.log(result))
  .then(result2 => result2 + '!')
  .catch(() => console.log('error'));

console.log(promise.then(result => console.log(result)));
