const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  describe('type: SUM', function () {
    it('should return the sum of rounded numbers', function () {
      const result = calculateNumber('SUM', 4.2, 2.6);
      assert.strictEqual(result, 7);
    });
  });

  describe('type: SUBTRACT', function () {
    it('should return the subtraction of rounded numbers', function () {
      const result = calculateNumber('SUBTRACT', 4.2, 2.6);
      assert.strictEqual(result, 1);
    });
  });

  describe('type: DIVIDE', function () {
    it('should return the division of rounded numbers', function () {
      const result = calculateNumber('DIVIDE', 9.0, 2.6);
      assert.strictEqual(result, 3);
    });

    it('should return "Error" when dividing by 0', function () {
      const result = calculateNumber('DIVIDE', 4.2, 0);
      assert.strictEqual(result, 'Error');
    });
  });
});
