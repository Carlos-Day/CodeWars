function solve(s){
    //Convert s to uppercase and check how many changes were made compared to the original string. 
    let uppercase = s.toUpperCase()
    let upperErrors = 0
    for(i=0;i<uppercase.length; i++){
      if(uppercase[i] !== s[i]){
        upperErrors++
      }
    }
    //do the same for lowercase. 
    let lowercase = s.toLowerCase()
    let lowerErrors = 0
    for(i=0;i<lowercase.length; i++){
      if(lowercase[i] !== s[i]){
        lowerErrors++
      }
    }
    //if the changes to convert to lowercase are less than to uppercase convert to lower
    if(lowerErrors <= upperErrors){
      return lowercase
    }else{
      return uppercase
    }
  }