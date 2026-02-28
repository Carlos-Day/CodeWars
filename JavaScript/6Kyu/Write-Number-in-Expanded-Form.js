function expandedForm(num) {
    //make an empty array, this will be used to create the returned string. 
    let arr = []
    //for each char in the num if it is not equal to 0 then prepare to add it to the array
    let numArr = String(num).split('')
    for(let i=0; i<numArr.length; i++){
  //   if a non 0 num is fouund then find the number of chars there are after it. 
      if(numArr[i] != 0){
        let trailingNumsArr = numArr.slice(i+1)
  //     add the char plus that many zeros as a num to the array. 
        let finalNum = numArr[i] + trailingNumsArr.fill(0).join('')
        arr.push(finalNum)
      }
    }
    //join the array together with " + " in between each of the elements. return it. 
    return arr.join(' + ')
  }