const chai = require('chai');
const expect = chai.expect;
const { addition, subtraction } = require('../src/calculatorApp');

describe('Addition Functionality', () => {
  
  it('Check for addition of two positive numbers and return the sum as positive number', () => {
    expect(addition(4,6)).to.equal(10);
  });

  it('Check for addition of two negative numbers and return the sum as negative number.', () => {
    expect(addition(-2,-8)).to.equal(-10);
    expect(addition(-5,-1)).to.equal(-6);
  });

  it('Check if either of number is negative produce subtracted output.', () => {
    expect(addition(-3, 9)).to.equal(6);
    expect(addition(8, -5)).to.equal(3);
  });


});

describe('Subtraction Functionality', () => {
  it('Check for subtracting two positive number and return positive subtraction', () => {
    expect(subtraction(15,7)).to.equal(8)    
  });
  it('Check if either of number is negative produce sum as output', () => {
    expect(subtraction(-5, 10)).to.equal(-15);    
    expect(subtraction(15, -10)).to.equal(25);    
  });
  it('Subtracting zero will produce zero as subtraction.', () => {
    // Write Test Case Here
    expect(subtraction(0,0)).to.equal(0)
  });
});
