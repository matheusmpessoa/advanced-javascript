movePlayer(100, 'Left', function() {
  movePlayer(400, 'Left', function() {
    movePlayer(10, 'Right', function() {
      movePlayer(300, 'Left', function() {

      });
    });
  });
});

// or

movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(300, 'Left'))
