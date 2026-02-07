function calculateYears(principal, interest, tax, desired) {
    //set a years passed counter set to 0
    let years = 0
    //if principal >= desired retun 0
    if(principal >= desired){
      return 0
    }
    //while principal < desired, find the total final post tax amt. and increment years
    while(principal < desired){
      principal = principal + (principal * interest) - (principal * interest * tax)
      years++
    }
    //return years.
    return years
  }