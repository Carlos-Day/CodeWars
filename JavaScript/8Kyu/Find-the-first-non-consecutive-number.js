function firstNonConsecutive (arr) {
    //iterate over each num in the arr. 
    //If index = 1 skip
    for(i=1; i< arr.length; i++){
    //if the num does not equal the previous num +1 then return it
     if(arr[i] !== arr[i-1]+1){
       return arr[i]
     }
    }
    //otherwise return null
    return null
  }