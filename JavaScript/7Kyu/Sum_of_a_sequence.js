const sequenceSum = (begin, end, step) => {
    //if start val > end return 0
    if(begin>end){
      return 0
    }
    //set a sum equal to begin value
    let sum = 0
    //while begin < end add step to begin value and add it to sum. 
    while(begin <= end){
      sum += begin
      begin += step
    }
    //return sum
    return sum
  };