function isValidWalk(walk) {
    //if the array does not have exactly 10 values return false. 
    if(walk.length !== 10){
      return false
    }
    //count the instances of each char. 
    let nCount = 0
    let sCount = 0
    let wCount = 0
    let eCount = 0
    
    for(let i=0; i<walk.length; i++){
      switch(walk[i]){
          case 'n': 
          nCount++ 
          break;
          case 's': 
          sCount++ 
          break;
          case 'w': 
          wCount++ 
          break;
          case 'e': 
          eCount++ 
          break;
      }
    }
    //if amount of n and s are equal and the amount of w and e are equal then return true, otherwise false
    return nCount === sCount && wCount === eCount ? true : false
  }