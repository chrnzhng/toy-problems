function longest(s1, s2) {
    var str = `${s1}${s2}`;
    var answer = str.split("").filter(function (x, n, s) {
        return s.indexOf(x) == n
    }).join("");
    var answerArr = answer.split("")
        .sort()
        .join("");

    return answerArr;

}

// Best practice

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')