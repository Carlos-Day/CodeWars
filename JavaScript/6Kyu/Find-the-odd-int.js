function findOdd(A) {
    //make an object to contain the number counts
    let numCounts = {}
    //iterate over the array and if a number is not in the object, add it
    for(i=0; i<A.length; i++){
      if(!numCounts[A[i]]){
        numCounts[A[i]] = 1
      }else{
    //otherwise add 1 to its count. 
        numCounts[A[i]]++
      } 
    }
    //find the value in the object that appears an odd number of times and return its key
    //(%2 !== 0) 
    let solution = Object.keys(numCounts).find((key) => numCounts[key] % 2 !== 0)
    return Number(solution)
  }