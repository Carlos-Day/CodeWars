function minValue(values){
    //make an arr of unique elements. 
    let solution = []
    //iterate through values and if an element does not exist in arr then push it to arr
    for(let i=0; i<values.length; i++){
      if(solution.includes(values[i]) == false){
        solution.push(values[i])
      }
    }
    //sort arr, join it, convert to a num, return it. 
    return Number(solution.sort((a, b) => a-b).join(''))
  }