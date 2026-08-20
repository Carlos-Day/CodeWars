function titleCase(title, minorWords) {
    //if the title is empty return an empty string. 
    if(title === ''){ return ''}
    //convert the title into an array of each word split by the spaces in between the words. 
    let splitTitle = title.toLowerCase().split(' ')
    //split the exceptions into an array, based on the space between them. 
    let splitMinorWords = (minorWords ?? '').toLowerCase().split(' ')
    //make a function that converts a string to title case. 
    function convertTitle(string){
      return string[0].toUpperCase() + string.substring(1).toLowerCase()
    }
    //.map the title arr and if it is the first element then convert to title case
    let finalTitle = splitTitle.map((ele, index) => {
      if(index === 0){
        return convertTitle(ele)
      }
    //otherwise check if the string is in the exception arr. If it is not then convert to title case. 
      if(splitMinorWords.includes(ele)){
        return ele
      }else{
        return convertTitle(ele)
      }
    })
    //join the title arr and return it. 
    return finalTitle.join(' ')
  }