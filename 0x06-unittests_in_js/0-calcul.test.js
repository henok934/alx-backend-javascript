const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return the sum of rounded numbers', function () {
    const result1 = calculateNumber(3.7, 2.1);
    assert.strictEqual(result1, 6);

    const result2 = calculateNumber(1.4, 5.9);
    assert.strictEqual(result2, 7);

    const result3 = calculateNumber(8.2, 4.5);
    assert.strictEqual(result3, 13);
  });
});
