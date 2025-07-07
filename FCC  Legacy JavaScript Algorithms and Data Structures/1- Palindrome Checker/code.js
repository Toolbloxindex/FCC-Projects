function palindrome(str) {
    let removeRgx = /[^a-zA-Z0-9]/g
    let cleanedStr = str.replace(removeRgx, " ").toLowerCase();
    let reversedStr = str.split("").reverse().join("");
    if (cleanedStr === reversedStr) {
        return true
    }
    else {
        return false
    }
}

console.log(palindrome("eye"));
