import filter from '../src/filter.js'
import chai from 'chai'

describe('filter.js', () => {
    it('case with simple function result in false element', () => {
        chai.expect(filter(['euro', 'dollar'], (item, index, array) => item !== 'dollar')).to.deep.equal(['euro'])
    })

    it('case with simple function that result in true', () => {
        chai.expect(filter(['euro'], (item, index, array) => item === 'euro')).to.deep.equal(['euro'])
    })

    it('predicate not being function should throw error', () => {
        chai.expect(() => filter([23], 'not func')).to.throw(TypeError)
    })
})