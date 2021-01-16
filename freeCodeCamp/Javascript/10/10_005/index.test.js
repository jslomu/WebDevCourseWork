var cashRegister = require('./index.js')

describe("Test function to calculate customer's change.", () => {
    test("Calculates change when customer provides enough money.", () => {
        expect(cashRegister.calculateChange(10,20)).toEqual(10);
    });
    test("Returns an error when customer does not provide enough money.", () => {
        expect(cashRegister.calculateChange(20,10)).toBe("Customer has provided insufficient funds.");
    });
});

describe("Test the function to sort the input array.", () => {
    test("Sort the cid (cash in drawer) array in order from largest to smallest", () => {
        expect(cashRegister.sortCid([["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])).toEqual([["ONE HUNDRED", 100], ["TWENTY", 60], ["TEN", 20], ["FIVE", 55], ["ONE", 90], ["QUARTER", 4.25], ["DIME", 3.1], ["NICKEL", 2.05], ["PENNY", 1.01]]);
    });
});

describe("Test the function to convert the customer's change to coins and bills.", () => {
    test("Returns an array for a single $100 bill.", () => {
        expect(cashRegister.itemiseChange(100)).toEqual([["ONE HUNDRED", 1]]);
    });
    test("Returns an array with change due in coins and bills, sorted in highest to lowest order.", () => {
        expect(cashRegister.itemiseChange(136.41)).toEqual([["ONE HUNDRED", 1],["TWENTY", 1],["TEN", 1],["FIVE", 1],["ONE", 1],["QUARTER", 1],["DIME", 1],["NICKEL", 1],["PENNY", 1]]);
    });
});

describe("Test function to calculate sum of cash in drawer.", () => {
    test("Returns correct result for a one of each coin and bill.", () => {
        expect(cashRegister.calculateCidSum([["ONE HUNDRED", 1],["TWENTY", 1],["TEN", 1],["FIVE", 1],["ONE", 1],["QUARTER", 1],["DIME", 1],["NICKEL", 1],["PENNY", 1]])).toEqual(136.41);
    });
    test("Returns correct result for multiple of a single bill.", () => {
        expect(cashRegister.calculateCidSum([["ONE HUNDRED", 2]])).toEqual(200);
    });
    test("Calculates the total sum of the cash in drawer.", () => {
        expect(cashRegister.calculateCidSum([["ONE HUNDRED", 1],["TWENTY", 1]])).toEqual(120);
    });
});

describe("Test function to return status", () => {
    test("Returns INSUFFICIENT_FUNDS when cash in drawer is less than required change.", () => {
        expect(cashRegister.getStatus([["ONE HUNDRED", 2], ["TEN", 1]], 220)).toBe("INSUFFICIENT_FUNDS");
    });
    test("Returns CLOSED when cash in drawer is equal to the change due.", () => {
        expect(cashRegister.getStatus([["TWENTY", 3], ["FIVE", 2]], 70)).toBe("CLOSED");
    });
    test("Returns OPEN when cash in drawer is more than required change.", () => {
        expect(cashRegister.getStatus([["TWENTY", 3], ["FIVE", 2]], 40)).toBe("OPEN");
    });
});
