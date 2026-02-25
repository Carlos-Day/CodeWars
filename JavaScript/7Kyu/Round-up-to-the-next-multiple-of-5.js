function roundToNext5(n){
    //take the num and continuously add 1 until it has a % of 0 then return the num. 
    while(n%5 !== 0){
      n++
    }
    return n
  }