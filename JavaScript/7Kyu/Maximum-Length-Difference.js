function mxdiflg(a1, a2) {
    // check for if either arr is empty and return -1
    if(a1.length == 0 || a2.length == 0){
      return -1
    }
    //set a count for the largest difference
    let largestDiff = 0
    //check each string combination and check if it is the largest count. If so update count. 
    for(i=0; i<a1.length; i++){
      for(z=0; z<a2.length; z++){
        if(Math.abs(a1[i].length - a2[z].length) > largestDiff){
          largestDiff = Math.abs(a1[i].length - a2[z].length)
        }
      }
    }
    //return count
    return largestDiff
  }