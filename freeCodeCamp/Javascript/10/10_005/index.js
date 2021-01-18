function checkCashRegister(price, cash, cid) {
    let changeSum = calculateChange(price, cash);
    if (typeof(changeSum) !== "number") { return changeSum };
    if (calculateCidSum(cid) < changeSum) {
        return { status: "INSUFFICIENT_FUNDS", change: []};
    }
    return checkFunds(cid, changeSum);
}

const reference = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100
}

function calculateChange(price, cash) {
    return cash > price ? cash - price : "Customer has provided insufficient funds."
}


function calculateCidSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i][1];
    }
    return sum;
}

function checkFunds(cid, changeSum) {
    let changeArray = [];
    let sortedCid = [];
    for (let i = 0; i < cid.length; i++) {
        sortedCid[i] = cid[i].slice();
    }
    sortCid(sortedCid);
    let value, valueName, count, cidValue;
    changeSum = parseFloat(changeSum);
    for (let i = 0; i < sortedCid.length; i++) {
        valueName = sortedCid[i][0];
        value = reference[valueName];
        cidValue = sortedCid[i][1];
        if (changeSum >= value) {
            count = Math.floor(changeSum / value);
            if ((count * value) <= cidValue ) {
                changeSum -= (count * value);
              	changeSum = changeSum.toFixed(2);
                changeArray.push([valueName, count * value]);
                sortedCid[i][1] = cidValue - (count * value);
            } else if (cidValue > 0) {
                changeSum -= cidValue;
              	changeSum = changeSum.toFixed(2);
                changeArray.push([valueName, cidValue]);
                sortedCid[i][1] = 0;
            }
        }
    }
    if (changeSum > 0) {
        return { 'status': "INSUFFICIENT_FUNDS", 'change': [] };
    }
    for (let i = 0; i < sortedCid.length; i++) {
        if (sortedCid[i][1] > 0) {
            return { 'status': "OPEN", 'change': changeArray }; 
        }
    }
    return { 'status': "CLOSED", 'change': cid };
}

function sortCid(cid) {
    const sortBy = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"]
    return cid.sort((a, b) => sortBy.indexOf(a[0]) - sortBy.indexOf(b[0]));
}

module.exports = { 
    checkCashRegister,
    calculateChange,
    calculateCidSum,
    checkFunds,
    sortCid
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);