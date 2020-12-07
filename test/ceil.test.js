import chai from "chai"
import ceil from "../src/ceil.js"
describe("ceil.js ", () =>{
    it("test with even number", () =>{
        chai.expect(ceil(2.000)).to.equal(2)
    })
    it("test with integer ", () =>{
        chai.expect(ceil(1)).to.equal(1)
    })
    it("test with three decimals rounded up to one decimal", () =>{
        chai.expect(ceil(1.234, 1)).to.equal(1.3)
    })
    it("test with four decimals rounded up to two decimal", () =>{
        chai.expect(ceil(7.4999, 2)).to.equal(7.50)
    })
    it("test with negative parameter", () =>{
        chai.expect(ceil(1001.234, -2)).to.equal(1100)
    })
    it("test integer with negative parameter", () =>{
        chai.expect(ceil(2, -2)).to.equal(100)
    })
})