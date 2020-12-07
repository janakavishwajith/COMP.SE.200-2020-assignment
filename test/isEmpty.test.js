import isEmpty from '../src/isEmpty.js'
import chai from 'chai'

describe('isEmpty.js',()=>{
    it('empty set', ()=> {
        chai.expect(isEmpty(new Set())).to.equal(true)
    })
    it('empty map', ()=> {
        chai.expect(isEmpty(new Map())).to.equal(true)
    })
    it('empty check on null', ()=> {
        chai.expect(isEmpty(null)).to.equal(true)
    })
    it('empty check on boolean', ()=> {
        chai.expect(isEmpty(true)).to.equal(true)
    })
    it('empty check empty string', ()=> {
        chai.expect(isEmpty('')).to.equal(true)
    })
    it('non empty object', ()=> {
        var mappy = ({firsth:1,second:'',},{firsth:2,second:''})
        chai.expect(isEmpty(mappy)).to.equal(false)
    })
    it('non empty array', ()=> {
        var new_array = [1,2,3,4]
        chai.expect(isEmpty(new_array)).to.equal(false)
    })
    it('empty check on String', ()=> {
        chai.expect(isEmpty('abc')).to.equal(false)
    })
})