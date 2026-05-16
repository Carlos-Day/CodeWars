function alphabetWar(fight){
    //calculate the left total
    let left = fight.toLowerCase().split('').filter((char) => char == "w" || char == "p" || char == "b" || char == "s").map((char) => {
      if(char == "w"){
        return 4
      }else if(char =="p"){
        return 3
      }else if(char == "b"){
        return 2
      }else{
        return 1
      }
    }).reduce((acc, curr) => acc + curr, 0)
    //calculate the right total. 
      let right = fight.toLowerCase().split('').filter((char) => char == "m" || char == "q" || char == "d" || char == "z").map((char) => {
      if(char == "m"){
        return 4
      }else if(char =="q"){
        return 3
      }else if(char == "d"){
        return 2
      }else{
        return 1
      }
    }).reduce((acc, curr) => acc + curr, 0)
    //if left total is greater return left wins string
    if(left > right){
      return "Left side wins!"
    //if right total is greater return right wins string. 
    }else if(right > left){
      return "Right side wins!"
    //otherwise return the third string. 
    }else{
      return "Let's fight again!"
    }
  }