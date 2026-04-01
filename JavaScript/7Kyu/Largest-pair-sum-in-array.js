function largestPairSum (numbers) {
    //sort the array in descending order. sum and return the nums in position 0 and 1
    let sorted = numbers.sort((a,b)=> b-a)
    return sorted[0] + sorted[1]
  }