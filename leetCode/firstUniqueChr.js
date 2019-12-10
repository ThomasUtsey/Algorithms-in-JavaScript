


var firstUniq = function(s) {
const obj = {}

for (i = 0; i < s.length; i++){
obj[s[i]]?obj[s[i]]++:obj[s[i]] = 1
} 

for (i = 0; i < s.length; i++){
    if (obj[s[i]] === 1) return i 
    } 

    return -1

};

   


console.log(firstUniq('tessyte'))