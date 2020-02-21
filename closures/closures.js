function a() {
  let grandpa = 'grandpa';
  return function b() {
    let father = 'father';
    return function c() {
      let son = 'son';
      return `${grandpa} > ${father} > ${son}`
    }
  }
}

console.log(a()()());
