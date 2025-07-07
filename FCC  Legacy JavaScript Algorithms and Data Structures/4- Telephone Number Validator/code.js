function telephoneCheck(str) {
    let removeRegx = /[^0-9]/g
    let cleanedStr = str.replace(removeRegx, "")
    if (cleanedStr.length == 10 || cleanedStr.length == 11) {
        if (cleanedStr.length == 11 && cleanedStr[0] != "1") {
            return false
        }
        if (cleanedStr.length == 10 && cleanedStr[0] == "1") {
            return false
        }
    }
    else {
        return false
    }
    return true
}

console.log(telephoneCheck("1 555)555-5555"));