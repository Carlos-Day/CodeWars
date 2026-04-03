function longestConsec(strarr, k) {
    //check for situations when you return ''
    if(k>strarr.length || k<0 || strarr.length == 0){
      return ''
    }
    //set variables for longest string
    let longestString = ''
    //iterate over the array and evaluate the length of each matched string. 
    //watch for concatenating 'undefined'
    for(let i=0; i<strarr.length; i++){
      let currentString = ''
      for(let z=0; z<k; z++){
        if(strarr[i + z] !== undefined){
          currentString += strarr[i +z]
        }
      }
    //update longest string and longest string length. 
      if(currentString.length>longestString.length){
        longestString = currentString
      }
    }
    //return longest string. 
    return longestString
  }