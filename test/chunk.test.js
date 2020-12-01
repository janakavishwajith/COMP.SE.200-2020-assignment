import chai from 'chai';
import {default as chunk} from '../src/chunk';

const expect = chai.expect;

describe('------Testing for the chunk.js function-----', () => { 
    
    describe('Null Array Scenario', () => {
        const output = chunk(null, 1);
        expect(output).to.be.null;
    });
});