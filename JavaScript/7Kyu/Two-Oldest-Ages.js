function twoOldestAges(ages){
    ages.sort((a,b) => a-b)
    return [ ages.pop(), ages.pop()].reverse()
  }