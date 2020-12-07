import toFinite from '../src/toFinite.js'
import chai from 'chai'
describe('toFinite.js',()=>{
    it('848000000 to finite numbers',()=>{
        chai.expect(toFinite(848000000)).to.equal(8.48e+8)
    })
    it('1.7976931348623158e+308 to finite numbers',()=>{
        chai.expect(toFinite(1.7976931348623158e+308)).to.equal(1.7976931348623157e+308)
    })
    it('-1.7976931348623157e+308 to finite numbers',()=>{
        chai.expect(toFinite(-1.7976931348623157e+308)).to.equal(-1.7976931348623157e+308)
    })
})