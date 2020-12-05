import add from '../src/add.js'
import chai from 'chai'

describe('add.js', () => {
    it('adds positive numbers', () => {
      chai.expect(add(30, 20)).to.equal(50)
    })

    it('adds negative numbers', () => {
      chai.expect(add(-30, -20)).to.equal(-50)
    })

    describe('input is not a number', () => {
      const augend = Math.floor(Math.random() * 10000 - Math.random() * 10000)
      it('input is empty string', () => {
        chai.expect(add(augend, '')).to.equal(augend.toString())
      })

    })
  })