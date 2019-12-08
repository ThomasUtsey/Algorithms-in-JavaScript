
// When using reccursion at least one base case and on recursion 

// counter = (n) =>{

/*Rather than using the for loop we replace it with recurrsion 
this does not provide added performance. reccursion is used to 
simplify code for the developer*/


//    for(let n = 0; n<= 100; n++){
//        console.log (n)
//    }
//     console.log(n)

//     // the if statement is our base case and it stops at 100 else the function would not stop or an error would be thrown.
//     if(n === 100){
//         return
//     }

//     // in the return we are calling the function and increasing n by 1 each time till the base case is met

//     return counter(n+1)

// }

// counter(0)

// const items = [[1,2,3],[4,5,6]]

// findSix = (i) => {
//     let hasSix = 'no'

//     i.forEach(e =>{
//         e.forEach(o =>{
//             if (o === 6){
//                 hasSix = 'yes'
//             }
//         })
//     })
//     return hasSix

// }
// console.log(findSix(items))

const items = [[1,2,3],[4,5,[6]]]

findSix = (i) => {
    let hasSix = 'no'

    i.forEach(e =>{
        
            if (e === 6){
                hasSix = 'yes'
            }
            if (Array.isArray(e)){
                hasSix = findSix(e)
            }
        })
    
    return hasSix

}
console.log(findSix(items))