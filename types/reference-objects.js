let obj = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'Tryyy'
  }
};

let clone = Object.assign({}, obj);
let clone2 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj)); //deep cloning

obj.c.deep = 'Hahahah';
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);
