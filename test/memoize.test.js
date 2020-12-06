import memoize from '../src/memoize.js'
import chai from 'chai'
describe('memoize.js', () => {
    it('input of array without resolver', () => {
        const data = memoize(() => [1, 2, 3, 4])
        chai.expect([...data.cache].length).to.equal(0)
    })

    it('input of an object without resolver', () => {
        const data = memoize(() => ({1: 2, 3: 4}))
        chai.expect(data.cache.get(1)).to.equal(2)
        chai.expect(data.cache.get(3)).to.equal(4)
    })

    it('input of an object with resolver', () => {
        const data = memoize(() => ({1: 2, 3: 4}), (key) => {
            if (key === 1) {
                return 'guard'
            }
            return key
        })
        chai.expect(data.cache.get('guard')).to.equal(2)
        chai.expect(data.cache.get(3)).to.equal(4)
    })
})