function trickyDoubles(n){
    //make a copy of n as a string
    let str = n.toString()
    let strLength = str.length
    //if n length is even run conditional
    if(str.length % 2 === 0){
      //if the first half of the string is equal to the last half then return n as is. 
      if(str.slice(0,str.length/2) == str.slice(str.length/2)){
        return n
      }
    }
    //otherwise multiply n by two and return. 
    return n*2
  }