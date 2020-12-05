import words from '../src/words.js'
import chai from 'chai'

describe('words.js',()=>{
    it('seperate with ,',()=>{
        chai.expect(words('2020, finland, tampere, helsinki,')).to.deep.equal(['2020' , 'finland', 'tampere', 'helsinki'])
    })
    it('seperate with space',()=>{
        chai.expect(words('5 flowers on the vase', /[^, ]+/g)).to.deep.equal(['5', 'flowers', 'on', 'the', 'vase'])
    })
})