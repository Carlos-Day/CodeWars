function sumOfDifferences(arr) {
    //check for short arr. 
    if(arr.length<2){
      return 0
    }
    //sort the array in descending order. 
    arr = arr.sort((a,b) => b-a)
    //take the first element and subtract the second, add it to a total. do the whole array. 
    let count = 0
    for(let i=0; i<arr.length-1; i++){
      count += arr[i] - arr[i+1]
    }
    //return the result. 
    return count
  }