function sumDigits(number) {
    //convert to a string, for each digit take the absolute value and add it to count. 
    let splitNums = String(Math.abs(number)).split('')
    return splitNums.reduce((acc, curr) => acc + Number(curr), 0)  
  }