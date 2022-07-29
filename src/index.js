module.exports = function toReadable(num) {
    const arr0_9 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const arr11_19 = [
        " ",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const arr10_90 = [
        " ",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const arr100_900 = [" hundred"];

    let str = num.toString();

    if (str.length == 1) {
        return arr0_9[+str];
    }
    if (str.length == 2 && +str[1] == 0) {
        return arr10_90[+str[0]];
    }
    if (str.length == 2 && +str[0] == 1 && +str[1] != 0) {
        return arr11_19[+str[1]];
    }
    if (str.length == 2 && +str[0] > 1) {
        return arr10_90[+str[0]] + " " + arr0_9[+str[1]];
    }
    if (str.length == 3 && +str[1] == 0 && +str[2] == 0) {
        return arr0_9[+str[0]] + arr100_900;
    }
    if (str.length == 3 && +str[2] !== 0 && +str[1] == 0) {
        return arr0_9[+str[0]] + arr100_900 + " " + arr0_9[+str[2]];
    }
    if (str.length == 3 && +str[2] == 0) {
        return arr0_9[+str[0]] + arr100_900 + " " + arr10_90[+str[1]];
    }
    if (str.length == 3 && +str[2] != 0 && +str[1] != 2 && +str[1] == 1) {
        return arr0_9[+str[0]] + arr100_900 + " " + arr11_19[+str[2]];
    }
    if (str.length == 3 && +str[1] >= 2) {
        return (
            arr0_9[+str[0]] +
            arr100_900 +
            " " +
            arr10_90[+str[1]] +
            " " +
            arr0_9[+str[2]]
        );
    }
};
