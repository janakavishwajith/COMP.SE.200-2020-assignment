import capitalize from '../src/capitalize.js'
import chai from 'chai'
describe('capitalize.js', () => {
  it('case for correct inputs which should be capitalized', () => {
    const cases = [
      ['Book', 'Book'],
      ['SOFT', 'Soft'],
      ['_university', '_university'],
      ['he is lazy', 'He is lazy'],
      ['40 glasses', '40 glasses']
    ]
    cases.forEach(([input, expected]) => {
      chai.expect(capitalize(input)).to.equal(expected)
    })
  })

  it('case for empty string', () => {
    chai.expect(capitalize('')).to.equal('')
  })

  it('case for input which is not a string', () => {
    const cases = [[null, 'Null'], [undefined, 'Undefined'], [{}, '[object object]'], [123, '123']]
    cases.forEach(([input, expected]) => {
      chai.expect(capitalize(input)).to.equal(expected)
    })
  })
})