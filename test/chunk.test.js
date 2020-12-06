import chai from 'chai';
import chunk from '../src/chunk.js';

const expect = chai.expect;

describe('chunk.js', () => { 
    
    it('Null Array Scenario', () => {
        const output = chunk(null, 1);
        expect(output).to.be.an('array').that.is.empty;
    })
})