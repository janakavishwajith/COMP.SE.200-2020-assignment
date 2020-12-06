import isLength from '../src/isLength.js'
import chai from 'chai'

describe('isLength.js',()=>{
    var long_int = 9003456789852369
    it('test with too high number',()=>{
        
        chai.expect(isLength(long_int)).to.equal(false)
    })
    it('test with smaller number',()=>{
        chai.expect(isLength(long_int-2)).to.equal(true)
    })
})
