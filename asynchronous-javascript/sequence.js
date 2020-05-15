async function seq() {
  const promises = [promise1, promise2, promise3];
  const op1 = await promise1;
  const op2 = await promise2;
  const op3 = await promise3;
}
