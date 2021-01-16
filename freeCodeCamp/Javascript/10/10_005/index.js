function checkCashRegister(price, cash, cid) {
    var change;

    return change;
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

function sortCid(cid) {
    const sortBy = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"]
    return cid.sort((a, b) => sortBy.indexOf(a[0]) - sortBy.indexOf(b[0]));
}

function itemiseChange(change) {
    const changeArray = [];
    let count;
    if (change >= 100) {
        count = Math.floor(change / 100);
        changeArray.push(["ONE HUNDRED", count]);
        change -= count * 100;
        change = change.toFixed(2);
    }
    if (change >= 20) {
        count = Math.floor(change / 20);
        changeArray.push(["TWENTY", count]);
        change -= count * 20;
        change = change.toFixed(2);
    }
    if (change >= 10) {
        count = Math.floor(change / 10);
        changeArray.push(["TEN", count]);
        change -= count * 10;
        change = change.toFixed(2);
    }
    if (change >= 5) {
        count = Math.floor(change / 5);
        changeArray.push(["FIVE", count]);
        change -= count * 5;
        change = change.toFixed(2);
    }
    if (change >= 1) {
        count = Math.floor(change / 1);
        changeArray.push(["ONE", count]);
        change -= count;
        change = change.toFixed(2);
    }
    if (change >= 0.25) {
        count = Math.floor(change / 0.25);
        changeArray.push(["QUARTER", count]);
        change -= count * 0.25;
        change = change.toFixed(2);
    }
    if (change >= 0.1) {
        count = Math.floor(change / 0.1);
        changeArray.push(["DIME", count]);
        change -= count * 0.1;
        change = change.toFixed(2);
    }
    if (change >= 0.05) {
        count = Math.floor(change / 0.05);
        changeArray.push(["NICKEL", count]);
        change -= count * 0.05;
        change = change.toFixed(2);
    }
    if (change >= 0.01) {
        count = Math.floor(change / 0.01);
        changeArray.push(["PENNY", count]);
        change -= count * 0.01;
        change = change.toFixed(2);
    }
    return changeArray;
}

function getStatus(cid, change) {
    if (calculateCidSum(cid) < change) {
        return "INSUFFICIENT_FUNDS";
    } else if (calculateCidSum(cid) === change) {
        return "CLOSED";
    } else {
        return "OPEN";
    }
}

function calculateCidSum(cid) {
    let sum = 0;
    for (let i = 0; i < cid.length; i++) {
        sum += reference[cid[i][0]] * cid[i][1];
    }
    return sum;
}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

module.exports = { 
    checkCashRegister,
    calculateChange,
    sortCid,
    itemiseChange,
    calculateCidSum,
    getStatus
}