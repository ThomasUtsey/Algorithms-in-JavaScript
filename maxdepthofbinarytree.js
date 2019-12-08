

// const root = [3,9,20,null,null,15,7]


// maxDepth = (n) => {
// let len = 2
// let i = 1
// const levels = [[n[0]]]

// while (i<n.length){
   
//     levels.push(n.slice(i,len+i))
//     i = i + len
//     len+=2
// }

// return levels.length

  // const chunk = []
  // let i = 0
  // while(i < arr.length){
  //   chunk
  //     .push(arr
  //       .slice(i,len + i))
  //   i = i+len
  // }
  // return chunk

// }


// console.log (maxDepth(root))


// maxDepth = function(root) {
//     let recur = (n) => {
//         if(!n) {
//             return 0;
//         }
//         let a = recur(n.left)
//         let b = recur(n.right)
//         console.log(root,a,b)
//         return a>b?a+1:b+1;
//     }
//     return recur(root)
// }

// console.log(maxDepth(root))

const arr = [1,1,2,2,3,4,3,5,4]

/**
//  * @param {number[]} nums
//  * @return {number}
 */
var singleNumber = function(nums) {
    let numObject = {}

   num = nums.forEach((e,i) =>{
       numObject[e]
       ?numObject[e]++
       :numObject[e] = 1
})
for (num in numObject){
   if (numObject[num] === 1){
       return Object.keys(numObject)[Object.values(numObject).indexOf(1)];
   }    }
}

console.log(singleNumber(arr))