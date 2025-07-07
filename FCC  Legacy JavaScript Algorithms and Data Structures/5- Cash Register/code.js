function checkCashRegister(price, cash, cid) {
    let registerCash = {
        "PENNY": cid[0][1],
        "NICKEL": cid[1][1],
        "DIME": cid[2][1],
        "QUARTER": cid[3][1],
        "ONE": cid[4][1],
        "FIVE": cid[5][1],
        "TEN": cid[6][1],
        "TWENTY": cid[7][1],
        "ONE HUNDRED": cid[8][1]
    }
    let cashSum = 0;
    for (let key in registerCash) {
        cashSum += registerCash[key];
    }
    console.log(cashSum)
    let change = cash - price;
    if (change > cashSum) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    if (change == cashSum) {
        return {status: "CLOSED", change: [...cid]}
    }
    
    for (let key in registerCash) {
      while (change >= 0) {
        change -= registerCash[key];
      }
    }
    //CHECK IF THERE IS EXACT CHANGE
    if (change < 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    else {
        return 
    }
    
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
