function warnTheSheep(queue) {
    //if the last element is "wolf" then return the first string. 
      if(queue[queue.length-1] === 'wolf'){
        return "Pls go away and stop eating my sheep"
      }else{
    //else find the index of wolf and return the second string where the wolf index +1 is = N
        return `Oi! Sheep number ${queue.length -1 - queue.indexOf('wolf')}! You are about to be eaten by a wolf!`
      }
    }