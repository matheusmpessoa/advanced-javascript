async function parallel() {
  const promises = [promise1, promise2, promise3];
  const [op1, op2, op3] = await Promise.all(promises);
  return `Parallel results, OP1: ${op1}, OP2: ${op2}, OP3: ${op3}`;
}
