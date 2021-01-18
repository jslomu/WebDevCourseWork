const cashRegister = require('./index.js')

describe("Test function to calculate customer's change.", () => {
    test("Calculates change when customer provides enough money.", () => {
        expect(cashRegister.calculateChange(10,20)).toEqual(10);
    });
    test("Returns an error when customer does not provide enough money.", () => {
        expect(cashRegister.calculateChange(20,10)).toBe("Customer has provided insufficient funds.");
    });
});

describe("Test function to calculate sum of cash in drawer.", () => {
    test("Returns correct result for a one of each coin and bill.", () => {
        expect(cashRegister.calculateCidSum([["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]])).toEqual(136.41);
    });
    test("Returns correct result for multiple of a single bill.", () => {
        expect(cashRegister.calculateCidSum([["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 200]])).toEqual(200);
    });
    test("Calculates the total sum of the cash in drawer.", () => {
        expect(cashRegister.calculateCidSum([["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 20], ["ONE HUNDRED", 100]])).toEqual(120);
    });
});

describe("Test the function to sort the input array.", () => {
    test("Sort the cid (cash in drawer) array in order from largest to smallest", () => {
        expect(cashRegister.sortCid([["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])).toEqual([["ONE HUNDRED", 100], ["TWENTY", 60], ["TEN", 20], ["FIVE", 55], ["ONE", 90], ["QUARTER", 4.25], ["DIME", 3.1], ["NICKEL", 2.05], ["PENNY", 1.01]]);
    });
});

describe("Test main function to return output", () => {
    test("Returns INSUFFICIENT_FUNDS when cash in drawer is less than required change.", () => {
        expect(cashRegister.checkCashRegister(200, 100, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 20], ["ONE HUNDRED", 100]])).toBe("Customer has provided insufficient funds.");
    });
    test("Returns CLOSED when cash in drawer is equal to the change due.", () => {
        expect(cashRegister.checkCashRegister(100, 170, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 10], ["TWENTY", 60], ["ONE HUNDRED", 0]])).toEqual({ status: "CLOSED", change: [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 10], ["TWENTY", 60], ["ONE HUNDRED", 0]] });
    });
    test("Returns OPEN when cash in drawer is more than required change.", () => {
        expect(cashRegister.checkCashRegister(100, 145, [["PENNY", 0],["NICKEL", 0],["DIME", 0],["QUARTER", 0],["ONE", 0],["FIVE", 10],["TWENTY", 60],["ONE HUNDRED", 0],["TEN", 0]])).toEqual({ status: "OPEN", change: [["TWENTY", 40],["FIVE", 5]] });
    });
    test("Returns INSUFFICIENT_FUNDS when cash in drawer cannot provide exact change", () => {
        expect(cashRegister.checkCashRegister(100, 130, [["PENNY", 0],["NICKEL", 0],["DIME", 0],["QUARTER", 0],["ONE", 0],["FIVE", 0],["TWENTY", 40],["ONE HUNDRED", 0],["TEN", 0]])).toEqual({ status: "INSUFFICIENT_FUNDS", change: []});
    })
});

describe("Tests provided by freeCodeCamp to ensure the solution functions correctly", () => {
    test("should return an object", () => {
        expect(typeof(cashRegister.checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))).toBe("object");
    });
    test('should return {status: "OPEN", change: [["QUARTER", 0.5]]', () => {
        expect(cashRegister.checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])).toEqual({status: "OPEN", change: [["QUARTER", 0.5]]});
    });
    test('should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}', () => {
        expect(cashRegister.checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])).toEqual({status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]});
    });
    test('should return {status: "INSUFFICIENT_FUNDS", change: []}', () => {
        expect(cashRegister.checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toEqual({status: "INSUFFICIENT_FUNDS", change: []});
    });
    test('should return {status: "INSUFFICIENT_FUNDS", change: []}', () => {
        expect(cashRegister.checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toEqual({status: "INSUFFICIENT_FUNDS", change: []});
    })
    test('should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}', () => {
        expect(cashRegister.checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toEqual({status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]});
    });
});