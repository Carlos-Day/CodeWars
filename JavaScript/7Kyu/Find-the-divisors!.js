function divisors(integer) {
    //make an empty array
    let arr = []
    //loop through all nums from 2 to that num. adding any that are a divisor to the arr. 
    for(let i=2; i<integer; i++){
      if(integer%i === 0){
        arr.push(i)
      }
    }
    //if the arr has a length return the arr. Otherwise return the string. 
    return arr.length ? arr : `${integer} is prime`
  }