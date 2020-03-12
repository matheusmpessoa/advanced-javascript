const initialArr = [1, 2, 3];
function mutateArray(initialArr) {
  initialArr.pop();
}

function mutateArray2(initialArr) {
  initialArr.array.forEach(item => {
    initialArr.push(1)
  });
}

mutateArray(initialArr);
mutateArray2(initialArr);
console.log(initialArr);
