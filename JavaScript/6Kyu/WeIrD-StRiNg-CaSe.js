function toWeirdCase(string){
    //split the string into an arr based on the spaces between words. 
    let arr = string.split(' ')
  //   return arr
    //create a function that will make odd chars upper case and even lower case. 
    function capitalize(string){
      return string.split('').map((char, index) => {
        return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      }).join('')
    }
    //call the capitalizing function on each word in the arr. 
    //return the joined arr with spaces in between the words. 
    return arr.map((word) => capitalize(word)).join(' ')
  }