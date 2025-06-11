const { add } = require('../index');

if (add(2, 3) !== 5) {
  throw new Error('Test failed: add(2, 3) should equal 5');
}

console.log('All tests passed!');
