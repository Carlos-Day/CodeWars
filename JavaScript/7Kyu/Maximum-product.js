function adjacentElementsProduct(array) {
    //set a max value
    let max = array[0] * array[1]
    //iterate over all of the numbers except the last one in the arr. 
    for(let i=0; i < (array.length-1); i++){
    //if the product of the current num * the next num is > max then replace max with the product
      if((array[i]*array[i+1]) > max){
       max = (array[i]*array[i+1])
     } 
    }
    //return max
    return max
  }