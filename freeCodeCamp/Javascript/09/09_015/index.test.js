const { TestScheduler } = require('jest')
const smallestCommons = require('./index')

describe("Smallest Commons Function", () => {
    test("Returns a number greater than the larger number", () => {
        expect(smallestCommons([1,3])).toBeGreaterThanOrEqual(3);
    })
})