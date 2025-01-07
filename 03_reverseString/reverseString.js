const reverseString = function(string) {
    // return string.split("").reverse().join("")
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--){
        reversed += string.at(i);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
