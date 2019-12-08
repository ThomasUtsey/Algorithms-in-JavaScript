function TreeNode(val){
    this.val = val
    this.left = this.right = null;
}


// const bst = (nums) => {
//  if(nums < 1 || !nums) return null;
// // error checking

// recur = (nums, start, end) => {

// if (start > end) return null;

// const middle = Math.floor((end + start) / 2);

// const root = new TreeNode (nums[middle]);

// root.left = recur(nums, start, middle -1);

// root.right =recur(nums, middle + 1,end)


// return root;
// }

// return recur(nums,0,nums.length -1)
// }

bst = (nums) =>{
if(!nums || nums.length < 1) return null;

recur = (nums,start,end) => {

    if (start > end) return null // base case

    const middle = Math.floor((end + start)/2)

    let root = new TreeNode(nums[middle])

    root.left = recur(nums,start,middle - 1)
    root.right = recur(nums,middle+1,end)

    return root;

}
return recur(nums,0,nums.length -1)
}


const arr = [-10,-3,0,5,9]

console.log(bst(arr))