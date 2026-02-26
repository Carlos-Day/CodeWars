function alphabetPosition(text) {
    //create an array to contain all of our nums. 
    let arr = []
    //change text to be all lowercase for easy comparison 
    text = text.toLowerCase()
    //for each char in text if its UTF-8 num is between a and z. 
    for(const char of text){
      if(char.codePointAt(0) > 96 && char.codePointAt(0) < 123){
    //If it is then push its place in the alphabet into the array. 
        arr.push(char.codePointAt(0)-96)
      }
    }
    //join the array elements and return the string. 
    return arr.join(' ')
    }
    