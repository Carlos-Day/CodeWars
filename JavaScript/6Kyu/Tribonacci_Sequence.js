function tribonacci(signature,n){
    //while n >= signature.length continue to add numbers in the sequence
    let count = 0
    while(n>=signature.length){
      //sum all of the first three numbers at the count position
      let sum = signature[count] + signature[count+1] +signature[count+2]
      //iterate count by one
      count++
      //append sum to the signature
      signature.push(sum)
    }
    //when n < signature.length then return the first N numbers of the array
    return signature.slice(0, n)
  }