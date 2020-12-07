import memoize from '../src/memoize.js'
import chai from 'chai'
describe('memoize.js', () => {
    it('input of array without resolver', () => {
        const data = memoize(() => [1, 2, 3, 4])
        chai.expect([...data.cache].length).to.equal(0)
    })
})