function narcissistic(value) {
    //split the num into an array of digits. 
    //transform each digit into the value of each digit raised to the power of the arr length
    let sum = value.toString().split('').map((digit) => digit**(value.toString().length)).reduce((acc, curr) => acc + curr, 0)
    //sum all arr elements together and compare to the initial value to return either true or false
    return sum === value
  }