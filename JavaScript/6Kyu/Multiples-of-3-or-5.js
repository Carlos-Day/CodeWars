function solution(number){
    //if number is negative return 0
    if(number < 0){
      return 0
    }
    //make an array for the multiples.
    let arr = []
    //loop from 0 to number. if i is a multiple of 3 or 5 then add it to arr. 
    for(let i=1; i<number; i++){
      if(i % 3 === 0 || i % 5 === 0){
        arr.push(i)
      }
    }
    //return the sum of arr elements. 
    return arr.reduce((acc, curr) => acc + curr, 0)
  }