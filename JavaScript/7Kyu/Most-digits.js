function findLongest(array){
    //make a top digit counter
    let topDigit = 0
    //iterate over the arr and find the num with the hightest number of digits. 
    for(let i=0; i<array.length; i++){
      if(String(array[i]).length > topDigit){
        topDigit = String(array[i]).length
      }
    }
    //find the first num in the arr that has that many digits and return it. 
    return array.find((num) => String(num).length == topDigit )  
  }