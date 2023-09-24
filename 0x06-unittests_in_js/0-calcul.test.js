const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the correct sum for 4.2 and 2.6', () => {
    assert.strictEqual(calculateNumber(4.2, 2.6), 7);
  });

  it('should return the correct sum for 4.2 and 7.6', () => {
    assert.strictEqual(calculateNumber(4.2, 7.6), 12);
  });
});
