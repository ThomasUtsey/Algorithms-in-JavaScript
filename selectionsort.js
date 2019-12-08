// create a function that loops through the array and finds the largest number
// create a function that loops through list calling the largest number function and removing the largest number from the list
const items = [3,4,2,6,1]

findLargest = list =>{
    let lrg = list[0]
    let indexOfLarge = 0
    for(let i = 0; i <= list.length; i++ ){ // loop over the array passed in by the selection sort function
        if (lrg < list[i]){ // determine if the index value is larger than the value of lrg variable
                lrg = list[i] // if the index value is larger asign that value to lrg
                indexOfLarge = i // assign the index of the larger value to this variable
        }
    }
    return indexOfLarge // return the index or location of the largest value to the selectionSort function
}

selectionSort = list => { 
    let newList = []
    let lrgItem
    while(list.length){ // loop over the array 
        lrgItem = findLargest(list) // assign this varaible the index of the largest value returned by the find largest function
        newList.push(list[lrgItem]) // push the value onto the new array by using the index stored in lrgItem to pass the value of list[lrg index]
        list.splice(lrgItem, 1) // remove the value from the passed in array since it has already been pushed onto the newArray
    } 
    return newList // return the sorted list 
}


console.log(selectionSort(items))

// O(n^2) the reasoning is because it loops over the array with the while loop in selectionSort function and then loops over each iteration again
// when the findlargest function is called and loops over the array each time the while loop goes over each index. Essentially its the same as nesting
// a loop within another loop
// largest = (list) =>{
// let lrg = list[0]
// let lrgindex;
// for(let i = 0; i < list.length; i++){
//     if(list[i]>lrg){
//         lrg = list[i]
//         lrgindex = i
//     }

// }
// return lrgindex
// }

// selectionSort = (list) =>{

// }












