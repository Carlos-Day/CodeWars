function meeting(s) {
    //make the s string uppercase. 
    s = s.toUpperCase()
    //separate each name into array elements. 
    //separate each first and last name into nested sub arrays. 
    //transform each name array to swap the first and last names, can reverse the order of the sub arr. 
    s = s.split(';').map((ele) => ele.split(':').reverse())
    //sort the outer name arr by checking if the last names are equal and if so sort by first name. Otherwise sort by last. 
    s = s.sort((a, b) => {
      if(a[0] === b[0]){
        return a[1].localeCompare(b[1])
      }else{
        return a[0].localeCompare(b[0])
      }
    })
    //add a ( to the start of every last name. Add a space to the start of first names and a ) to the end 
    //join the nested array elements. 
    return s.map((element) => `(${element[0]}, ${element[1]})`).join('')
  }