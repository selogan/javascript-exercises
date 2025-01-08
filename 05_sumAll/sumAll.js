const sumAll = function(from, to) {
    if ((!Number.isInteger(from) || !Number.isInteger(to)) || (from < 0 || to < 0)) {
        return "ERROR";
    }

    if (from > to) [from, to] = [to, from];

    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
