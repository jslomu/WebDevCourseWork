import spinalCase from "./index";

test("properly converts value to spinal case", () => {
  expect(spinalCase("ThisIsATest").toBe("this-is-a-test"));
});