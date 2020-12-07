import isLength from '../src/isLength.js'
import chai from 'chai'

describe('isLength.js',()=>{
    
    it('test with too high number',()=>{
        chai.expect(isLength(Number.MAX_SAFE_INTEGER + 1)).to.equal(false)
    })
    it('test a negative number',()=>{
        chai.expect(isLength(-5)).to.equal(false)
    })
    it('test a postive number less than MAX',()=>{
        chai.expect(isLength(5)).to.equal(true);
    })
    it('test the minimum integer',()=>{
        chai.expect(isLength(Number.MIN_VALUE)).to.equal(false);
    })
    it('test the infinity as the lenght',()=>{
        chai.expect(isLength(Infinity)).to.equal(false);
    })
    it('test non number format input as the length',()=>{
        chai.expect(isLength('5')).to.equal(false);
    })
})
