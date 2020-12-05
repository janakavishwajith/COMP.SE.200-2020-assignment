import toNumber from '../src/toNumber.js'
import chai from 'chai'

    describe('toNumber.js',()=>{
        it('convert to float',()=>{
            chai.expect(toNumber('4.123')).equal(4.123)
            chai.expect(toNumber('-450.63')).to.equal(-450.63)
        })
        it('negative test',()=>{
            chai.expect(toNumber('12kuusi')).to.deep.equal(NaN)
        })
    })