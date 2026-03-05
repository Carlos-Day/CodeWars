function oddOrEven(array) {
    //sum the elements in the array. 
    let sum = array.reduce((acc, curr) => acc + curr, 0)
    // return 'even' if even or 'odd' if odd, using %
    return sum % 2 === 0? 'even': 'odd'
  }