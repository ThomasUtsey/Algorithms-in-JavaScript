// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 

var titleToNumber = function(s) {
    const charMap = {
        A:1,
    }

    var res = 0;
    for (var i = 0, l = s.length; i < l; i++) {
        var num = charMap[s[i]];
        res += num * Math.pow(26, s.length - i - 1);
    }
    return res;
};

console.log(titleToNumber('AAA'))
