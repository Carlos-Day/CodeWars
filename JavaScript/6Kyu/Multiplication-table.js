function multiplicationTable(size) {
    //define a containing arr 
    let container = []
    //function should create an array of size length up to size times. 
    for(let i=1; i<=size; i++){
      let arr = []
    //it creates an arr where each element is multiplied by a number incrementing by one. 
      for(let z=1; z<=size; z++){
      arr.push(z*i)
      }
      container.push(arr)
    }
    return container 
  }
  