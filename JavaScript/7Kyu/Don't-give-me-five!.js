function dontGiveMeFive(start, end){
    //make an array with all of the nums
    let arr = []
    for(let i=start; i<= end; i++){
    //don't include any nums with char 5
      if(!i.toString().split('').includes('5')){
      arr.push(i)
      }
    }
    //return the length of the arr. 
    return arr.length
  }