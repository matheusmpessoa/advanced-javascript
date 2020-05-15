async function race() {
  const promises = [promise1, promise2, promise3];
  const winner = await Promise.race(promises);
  return `Race promise winner output: ${winner}`
}
//winner would be the one with the least delay time in setTimeout,i.e, promise3
