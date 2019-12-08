


// sum = arr => {
//     let total = 0
//     for(let i of arr){
//         total += i
//     }
//     return total
// }

sum = arr =>{
    console.log(arr)
    if(arr.length === 0) return 0 //base case is condition that will stop the function from being called after condition is met
    return arr[0] + sum(arr.slice(1)) // if items left in the array it will continue to recall it sliceing off the added index each cycle
}

console.log(sum([3,54,6,2,66,43,23]))


