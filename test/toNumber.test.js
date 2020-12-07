import toNumber from '../src/toNumber.js'
import chai from 'chai'

    describe('toNumber.js',()=>{
        it('convert to float',()=>{
            chai.expect(toNumber('4.123')).equal(4.123)
        })
        it('convert negative number to float',()=>{
            chai.expect(toNumber('-450.63')).to.equal(-450.63)
        })
        it('NaN text to convert test',()=>{
            chai.expect(toNumber('12kuusi')).to.deep.equal(NaN)
        })
        it('Object numbers',()=>{
            chai.expect(toNumber(new Number(6))).to.equal(6)
        })
        it('empty string',()=>{
            chai.expect(toNumber('')).to.equal(0)
        })
    })