function checkCashRegister(price, cash, cid) {
    const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
    };
    let cashSum = parseFloat(cid.reduce((sum, curr) => sum + curr[1], 0).toFixed(2));

    let change = cash - price;
    if (change > cashSum) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    if (change == cashSum) {
        return {status: "CLOSED", change: [...cid]}
    }
    
    let reversedCid = cid.reverse();
    let changeArr = [];
    for (let [unit, amount] of reversedCid) {
        let unitValue = currencyUnit[unit]
        let used = 0 
        while (change >= unitValue && amount > 0) {
            change  -= unitValue
            change = parseFloat(change.toFixed(2))
            amount -= unitValue
            used += unitValue
        }
        if (used > 0) {
            changeArr.push([unit, used])
        }
    }
    if (change > 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return {status: "OPEN", change: [...changeArr]}
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
