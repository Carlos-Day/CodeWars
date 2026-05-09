function duplicateEncode(word){
    //convert word to lowercase and split the chars into an array. 
    let arr = word.toLowerCase().split('')
    //change all chars in the array to either ( or )
    return arr.map((char, index) => {
    //check if it is the only occurrance by checking if the occurrance when starting from the front is the same index as starting from the end of the arr. 
      if(arr.indexOf(char) === arr.lastIndexOf(char)){
        return '('
      }else{
        return ')'
      }
    }).join('')
  }