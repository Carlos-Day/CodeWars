function wave(str){
    //convert the given string to lowercase, split it into an array by char and save to a new var
    let strArr = str.toLowerCase().split('')
    //make an empty solution arr. 
    let solution = []
    //iterate over the strArr by its length. 
    for(let i=0; i<strArr.length; i++){
    //if the current index is not an empty space then 
      if(strArr[i] != ' '){
    //make a copy of the arr but with the uppercase letter moved, join it and push it to arr
        solution.push(strArr.map((element, index) => index===i? strArr[i].toUpperCase():element ).join(''))
      }
    }
    //return solution arr
    return solution
  }