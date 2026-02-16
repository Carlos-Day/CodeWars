function high(x){
    //split the string into an array of words. 
    let splitWords = x.split(' ')
    // set a variable to be the highest value word. 
    let highestValueWord = ''
    let highValueWordScore = 0
    //Loop over the array and calculate the total value of each word. 
    for(let i=0; i<splitWords.length;i++){
        let splitChars = splitWords[i].split("")
        let sum = 0
      for(let z=0; z<splitChars.length;z++){
        sum += splitChars[z].charCodeAt(0)-96
    //if a word has greater value than the current highest value word then it replace it. 
        if(sum>highValueWordScore){
          highValueWordScore = sum
          highestValueWord = splitWords[i]
        }
        
      }
    }
    
    //return the word as a string. 
    return highestValueWord
  
  }