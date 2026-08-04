function findMissingLetter(array){
    //convert each char in the array to its unicode value
    let unicodeVals = array.map((char) => char.codePointAt(0))
    //find the element where the following element is not current element+1
    let missingUni = 0
    for(let i=0; i< (unicodeVals.length-1); i++){
      if(Number(unicodeVals[i])+1 !== Number(unicodeVals[i+1])){
        missingUni = Number(unicodeVals[i])+1
      }
    }
    //take that unicode value and +1 to it convert it to the alphabet char and return it. 
    return String.fromCodePoint(missingUni)
  }