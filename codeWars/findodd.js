// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
findOdd = (arr) =>{
    // const oddMap = {}
    // let oddNum;
    // let oddOcc;
    // let count = 0
    // for(let i = 0; i < arr.length; i++){

    // oddMap[arr[i]]?oddMap[arr[i]]++:oddMap[arr[i]] = 1 
    // console.log(oddMap)
    
    // }
    // console.log(oddMap)
    // for(let n in oddMap){
    //     console.log(n)
    //     if(oddMap[n] === 1){
    //         oddNum = n
    //     }else if(oddMap[n] % 2 === 1){
    //         oddNum = n
    //     }
    // }
    // return oddNum
//----------------------------------------------------------------
 return arr.reduce((a, b) =>{
  return (a ^ b)
 });
}
const arr = [10,20,30,30,20,10,20]
console.log(findOdd(arr))