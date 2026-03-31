function arrayDiff(a, b) {
    //while there are elements in array b,
    //check to see if that elements is present in array a
    while(b.length >= 1){
      let target = b.shift()
      while(a.includes(target)){
    //if it is then find it's index and splice it out of the array, 
    //continue to check if it is in the array. 
        a.splice(a.indexOf(target) ,1)
      }
    }
    //return array a
    return a
  }