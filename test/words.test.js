import words from '../src/words.js'
import chai from 'chai'

describe('words.js',()=>{
    it('seperate without specific pattern',()=>{
        chai.expect(words('2020, finland, tampere, helsinki,')).to.deep.equal(['2020' , 'finland', 'tampere', 'helsinki'])
    })
    it('seperate without specific pattern contains special characters',()=>{
        chai.expect(words('may, the, force, & everything, be, with, you, @ all!')).to.deep.equal(['may' , 'the', 'force', 'everything','be','with', 'you', 'all'])
    })
    it('seperate with given regex (space)',()=>{
        chai.expect(words('5 flowers on the vase', /[^, ]+/g)).to.deep.equal(['5', 'flowers', 'on', 'the', 'vase'])
    })
})