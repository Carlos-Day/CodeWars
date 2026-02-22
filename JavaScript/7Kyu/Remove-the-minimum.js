function removeSmallest(numbers) {
    //find the index of the smallest number in the array. 
    let smallestNumIndex = numbers.indexOf(Math.min(...numbers))
    //make a copy of the array  
    let numbersCopy = numbers
    //return the arr copy with the smallest num spliced out
    numbersCopy.splice(smallestNumIndex,1)
    return numbersCopy
  }