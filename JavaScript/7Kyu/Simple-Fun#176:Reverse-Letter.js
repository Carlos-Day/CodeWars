function reverseLetter(str) {
    //filter out any characters greater than  or equal to a and less than or equal to z
    let onlyLetters = str.split('').filter((char)=> {
      if(char >= 'a' && char <= 'z'){
        return true
      }
    })
    // reverse, and join the string. return it
    return onlyLetters.reverse().join('')
  }