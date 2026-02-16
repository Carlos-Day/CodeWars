function friend(friends){
    //filter the names arr to only include the string when name.length is equal to four. 
    return friends.filter((name) => name.length === 4? true: false)
  }