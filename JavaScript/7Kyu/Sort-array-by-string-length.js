function sortByLength (array) {
    //sort by comparing the length of each element 
    return array.sort((a,b) => a.length-b.length)
  }