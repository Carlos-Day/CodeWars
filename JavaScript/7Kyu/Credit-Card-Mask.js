function maskify(cc) {
    //separate string chars into array elements. reverse the array. 
    let arr = cc.split('').reverse()
    //Any elements in the arr greater than index 3 are turned into #. 
    //reverse and return the arr as a string. 
    return arr.map((char, index) => index>3? '#': char).reverse().join('')
  }