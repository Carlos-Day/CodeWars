function inArray(array1,array2){
    //make an array r
    let results = []
    //for each arr element in arr 1 
    for(let i=0; i<array1.length; i++){
    //loop over arr 2 elements and check if arr 1 element is in arr 2
      for(let z=0; z<array2.length; z++){
    //if they are present in arr 2, add them to r. Don't add any string twice.
  //       results.push(array1[i])
        if(array2[z].includes(array1[i]) && !results.includes(array1[i]) ){
          results.push(array1[i])
        }
      } 
    }
    //return r sorted.
    return results.sort((a,b) => a.localeCompare(b))
  }