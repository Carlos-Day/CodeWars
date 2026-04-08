function likes(names) {
    //if the array is empty then return "no one likes this"
    if(names.length === 0){
      return "no one likes this"
    //else if the array has a length of 1 return the second phrase with their name added. 
    }else if(names.length === 1){
      return `${names[0]} likes this`
    //else if the array has a length of 2 return the thrird phrase 
    }else if(names.length === 2){
      return `${names[0]} and ${names[1]} like this`    
    //else return the fourth phrase but add in array.length - 2. 
    }else if(names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`    
    //else return the final phrase. 
    }else{
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this` 
    }
  }