const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return the sum of rounded numbers', function () {
    assert.strictEqual(calculateNumber(4.2,2.6), 7);
  });

  it('rounded two numbers and show the sum of that number', function () {
    assert.strictEqual(calculateNumber(4.2,7.6), 12);
  });
});
