function rowWeights(array){
    //Add the sum of the even elements from array to a solution arr. 
    let solution = [array.filter((element, index) => index % 2 === 0).reduce((acc, curr) => acc + curr, 0)]
    //Push the sum of the odd elements from the array to solution arr. 
    solution.push(array.filter((element, index) => index % 2 !== 0).reduce((acc, curr) => acc + curr, 0))
    //return the solution arr. 
    return solution;
  }