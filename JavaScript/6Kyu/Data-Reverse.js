function dataReverse(data) {
    //declare a solution arr. 
    let solution = []
    //check if ther arr is empty
    if(data.length == 0){
      return solution
    }
    //while there are digits in the original arr. remove the last 8 and add it to solution arr. 
    while(data.length !== 0){
      solution.push(data.splice(-8))
    }
    //return solution arr
    return solution.join(',').split(',').map((element) => Number(element))
  }