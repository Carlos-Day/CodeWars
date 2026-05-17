function bump(x){
    //split the string into an array, filter for only the n, check the length for success
    return x.split('').filter((char) => char == 'n').length < 16 ? 'Woohoo!': 'Car Dead'
  }