function removeSmallest(numbers) {
    //find the index of the smallest number in the array. 
    let smallestNumIndex = numbers.indexOf(Math.min(...numbers))
    //return the arr with the smallest num removed 
    return numbers.filter((element, index) => index === smallestNumIndex?false:true)
  }