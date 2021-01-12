const { TestScheduler } = require('jest')
const smallestCommons = require('./index')

describe("Smallest Commons Function", () => {
    test("Sort the array from greatest to smallest.", () => {
        expect(smallestCommons([1,3]).toEqual([3,1]));
    })
})