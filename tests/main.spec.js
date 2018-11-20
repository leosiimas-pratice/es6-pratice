var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Calc', () => {

    //smoke tests
    describe('Smoke tests', () =>{

        it('should exist the calc lib', () => {
            expect(calc).to.exist;
        });

        it('should exist the method `sum`', () => {
            expect(calc.sum).to.exist;
        });
        it('should exist the method `sub`', () => {
            expect(calc.sub).to.exist;
        });
        it('should exist the method `mul`', () => {
            expect(calc.mul).to.exist;
        });
        it('should exist the method `div`', () => {
            expect(calc.div).to.exist;
        });
    });

    describe('Sum', () => {
        it('should return 4 when `sum(2,2)`', () => {
            expect(calc.sum(2,2)).to.be.equal(4);
        });
    });

    describe('Sub', () => {
        it('should return 4 when `sub(6,2)`', () => {
            expect(calc.sub(6,2)).to.be.equal(4);
        });

        it('should return 4 when `sub(2,6)`', () => {
            expect(calc.sub(2,6)).to.be.equal(-4);
        });
    });

    describe('Mul', () => {
        it('should return 4 when `mul(2,2)`', () => {
            expect(calc.mul(2,2)).to.be.equal(4);
        });
    });

    describe('Div', () => {
        it('should return 4 when `div(8,2)`', () => {
            expect(calc.div(8,2)).to.be.equal(4);
        });

        it('should return `Não é possivel divisão por zero!` when divide by 0', () => {
            expect(calc.div(8,0)).to.be.equal('Não é possivel divisão por zero!');
        });
    });
})
