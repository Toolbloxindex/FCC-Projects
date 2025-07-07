function rot13(str) {
    let rot13Table = {
        "A": "N", "B": "O", "C": "P", "D": "Q", "E": "R", "F": "S", "G": "T",
        "H": "U", "I": "V", "J": "W", "K": "X", "L": "Y", "M": "Z",
        "N": "A", "O": "B", "P": "C", "Q": "D", "R": "E", "S": "F", "T": "G",
        "U": "H", "V": "I", "W": "J", "X": "K", "Y": "L", "Z": "M"
    };
    let result = ""
    for (let i = 0; i < str.length;i++) {
        if (/[^a-zA-Z0-9]/g.test(str[i])) {
            result += str[i];
        }
        else {
            result += rot13Table[str[i]]
        }
    }
    return result
}

console.log(rot13("SERR PBQR PNZC"));