function findMultiples(integer, limit) {
    //create an empty arr. and a multiplier variable. 
    let arr = []
    let mult = 1
    //while n*multiplier is less than or equal to limit push the value of n*the multiple to the array. 
    while((integer*mult) <= limit){
      arr.push(integer*mult)
    //increment the multiplier by one. 
      mult++
    }  
    //return the arr
    return arr
  }