function positiveSum(arr) {
    let sum = 0;
    arr.forEach(e =>{
        if(e >= 0) sum += e
    })
    return sum
  }

  console.log(positiveSum([4,5,-6,7]))