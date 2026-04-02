function sortArray(array) {
    //make an array of only the odd numbers in array. Sort it in ascending order. 
    let oddArray = array.filter((element) => element % 2 !== 0).sort((a, b) => a-b)
    //iterate over array and whenever you find an odd number shift a num from oddArray and replace it in array. return array
    return array.map((element, i) => {
      if(element % 2 !== 0){
        return oddArray.shift()
      }else{
        return element
      }
    })
  }