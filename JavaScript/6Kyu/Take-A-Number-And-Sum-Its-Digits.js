function sumDigPow(a, b) {
    //create results arr. 
    let results = []
    //make a function to determine if a num meets the criteria.
    function test(num){
      //convert the num to a string, split it, raise each element to the power of its index+1, sum all nums
      let sum = num.toString().split('').map((digit, index) => digit**(index+1)).reduce((acc, curr) => acc + +curr, 0)
      //return result
      return sum == num
    }
    //for each num in the range run the test function and if it meets the criteria add it to the arr. 
    for(let i=a; i<=b; i++){
      if(test(i)){
        results.push(i)
      }
    }
    return results
  }