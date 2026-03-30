function wordsToMarks(string){
    //split the strring into an arr. change each char into its utf8 position -96, reduce for the total
    return string.split('').map((char)=> char.charCodeAt(0)-96).reduce((acc, curr)=> acc+curr, 0)
  }