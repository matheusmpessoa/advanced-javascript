const arraySD =  [1, 2, 3];

function removeLastItem(arraySD) {
  const newArray = [].concat(arraySD);
  newArray.pop();
  console.log(`newArray`, newArray);
  return newArray;
}

function multiplyBy2(arraySD) {
  return arraySD.map(item => item * 2);
}

const array2 = removeLastItem(arraySD);
const array3 = multiplyBy2(arraySD);

console.log(arraySD);
