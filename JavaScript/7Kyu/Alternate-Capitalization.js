function capitalize(s){
    //create an array for the solution
    let solution = []
    let string = s.split('')
    //for each char in the string capitalize every other letter starting with the first. 
    let evenSolution = []
    for(let i=0; i<string.length; i++){
      if(i % 2 === 0){
        evenSolution.push(string[i].toUpperCase())
        }else{
          evenSolution.push(string[i])
        }
    }
    //push the result to the solution arr
    solution.push(evenSolution.join(''))
    //for each char in the string starting with index 1 capitalize every other letter. 
    let oddSolution = []
    for(let i=0; i<string.length; i++){
      if(i % 2 === 0){
        oddSolution.push(string[i])
      }else{
        oddSolution.push(string[i].toUpperCase())
      }
    }
    //push the result to the solution arr 
    solution.push(oddSolution.join(''))
    //return the solution arr. 
    return solution
  };