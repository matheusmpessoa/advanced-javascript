movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right')) // chaining functions
  .then(() => movePlayer(330, 'Left'));

// Declare async function
async function playerStart() {
  const firstMove = await movePlayer(100, 'Left'); // pause this function until I have something from you
  const secondMove = await movePlayer(400, 'Left');
  await movePlayer(10, 'Right');
  await movePlayer(330, 'Left');
}
