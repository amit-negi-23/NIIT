const assert = require('chai').assert;
const packageFile = require('../package.json');
const calculator = require('../calculator');
const glob = require('glob');
const fs = require('fs');
const { expect } = require('chai');

// variable declairation
let sum = 0;
let sub = 0;
let mul = 0;
let div = 0;

// testsuit
describe('Calculator testing', function () {
  describe('Functionality testing', function () {
    describe('Addition functionality testing', function () {
      // testcase to test is dependencies are used or not
      it('Add two positive numbers, returning get positive sum', function () {
        // Write the testing logic here
        expect(calculator('A', 5, 8)).to.equal(13)
      });
      // test case to test add functionality

      it('Add two negative numbers, returning get negative sum', function () {
        // Write the testing logic here
        expect(calculator('A', -7, -2)).to.equal(-9)
      });

      // test case to test add functionality
      it('Add two number, with either of them is negative, producing subtracted output'
        , function () {

          // Write the testing logic here
          expect(calculator('A', 7, -2)).to.equal(5)
          expect(calculator('A', -16, 22)).to.equal(6)

        });
      // test case to test add functionality
      it('Add zeros, produces zero', function () {

        // Write the testing logic here
        expect(calculator('A', 0, 0)).to.equal(0)
      });
    });
    describe('Subtraction functionality testing', function () {
      // test case to test subtract functionality
      it('Subtract two positive numbers, returning get positive subtraction',
        function () {
          // Write the testing logic here
          expect(calculator('S', 5, 8)).to.equal(-3)
        });

      // test case to test subtract functionality
      it('Subtract two negative numbers, returning get negative subtraction',
        function () {
          // Write the testing logic here
          expect(calculator('s', -14, -8)).to.equal(-6)
        });

      // test case to test subtract functionality
      it('Subtract two number, with either of them is negative, producing sum output'
        , function () {
          // Write the testing logic here
          expect(calculator('S', -3, 8)).to.equal(-11)
          expect(calculator('S', 5, -8)).to.equal(13)
        });

      // test case to test subtract functionality
      it('Subtract zeros, produces zero', function () {
        // Write the testing logic here
        expect(calculator('s', 0, 0)).to.equal(0)
      });
    });
    describe('Multiplication functionality testing', function () {
      // test case to test multiply functionality
      it('Multiply two positive numbers, returning get positive Multiplication', function () {
        // Write the testing logic here
        expect(calculator('M', 12, 4)).to.equal(48)
      });
      // test case to test multiply functionality
      it('Multiply two negative numbers, returning get positive Multiplication', function () {
        // Write the testing logic here
        expect(calculator('m', -9, -9)).to.equal(81)
      });
      // test case to test multiply functionality
      it(`Multiply two number, with either of them is negative,
        producing negative multiplication output`,
        function () {
          // Write the testing logic here
          expect(calculator('M', -6, 4)).to.equal(-24)
          expect(calculator('M', 5, -8)).to.equal(-40)
        });

      // test case to test multiply functionality
      it('Multiply zeros, produces zero', function () {
        // Write the testing logic here
        expect(calculator('m', 0, 0)).to.equal(0)
      });
    });
    describe('Division functionality testing', function () {
      // test case to test divide functionality

      it('Divide two positive numbers, returning get positive Multiplication', function () {
        // Write the testing logic here
        expect(calculator('D', 12, 3)).to.equal(4)
      });


      // test case to test divide functionality
      it('Divide two negative numbers, returning get positive Multiplication', function () {
        // Write the testing logic here
        expect(calculator('d', -15, -5)).to.equal(3)
      });

      // test case to test divide functionality

      it('Divide two number, with either of them is negative, producing negative Division output',
        function () {
          // Write the testing logic here
          expect(calculator('D', -28, 7)).to.equal(-4)
          expect(calculator('D', 10, -100)).to.equal(-0.1)
        });

      // test case to test divide functionality
      it(`Should not divide by 0, producing 'Can not divide by zero' message`, function () {
        // Write the testing logic here
        expect(calculator('D', 0, 0)).to.equal('Can not divide by zero')
      });
    });
    describe('Unknown operation testing', function () {
      // test case to test divide functionality
      it(`should not calculate if unknown operation is passed,
        producing 'Unknown operation' message`,
        function () {
          // Write the testing logic here
          expect(calculator('h', 65, 81)).to.equal('Unknown operation')
        });
    });
  });
});