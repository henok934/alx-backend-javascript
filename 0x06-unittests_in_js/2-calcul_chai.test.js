const expect = require('chai').expect;
const calculateNumber = require('./2-calcul.js');

describe('calculateNumber', function () {
  describe('type: SUM', function () {
    it('should return the sum of rounded numbers', function () {
      const result = calculateNumber('SUM', 4.2, 2.6);
      expect(result).to.equal(7);
    });
  });

  describe('type: SUBTRACT', function () {
    it('should return the subtraction of rounded numbers', function () {
      const result = calculateNumber('SUBTRACT', 4.2, 2.6);
      expect(result).to.equal(1);
    });
  });

  describe('type: DIVIDE', function () {
    it('should return the division of rounded numbers', function () {
      const result = calculateNumber('DIVIDE', 9.0, 2.6);
      expect(result).to.equal(3);
    });

    it('should return "Error" when dividing by 0', function () {
      const result = calculateNumber('DIVIDE', 4.2, 0);
      expect(result).to.equal('Error');
    });
  });
});
