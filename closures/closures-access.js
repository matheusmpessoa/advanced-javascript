let view;
function initialize() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      view = "Hellooooo";
      called++;
      console.log('View inicializada');
    }
  }
}

const startOnce = initialize();
console.log(startOnce());
console.log(startOnce());

console.log(view);
