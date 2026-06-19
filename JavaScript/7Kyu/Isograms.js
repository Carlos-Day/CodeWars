function isIsogram(str){
    //set the given string to lowercase. 
    str = str.toLowerCase()
    //iterate over the string and if any of the chars is not unique return false. 
    for(let char of str){
    //if the indexOf a char is the same as the lastIndexOf a char then it is unique. 
      if(str.indexOf(char) !== str.lastIndexOf(char)){
        return false
      }
    }
    //otherwise return true
    return true
  }