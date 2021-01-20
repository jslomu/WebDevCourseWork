const { TestScheduler } = require("jest");
const clock = require("./index.js");

describe("Test the function that counts seconds.", () => {
    test("Test the function that counts seconds.", () => {
        let currentTime = new Date()
        expect(typeof(clock.getSeconds(currentTime))).toEqual("number");
    });
    
});