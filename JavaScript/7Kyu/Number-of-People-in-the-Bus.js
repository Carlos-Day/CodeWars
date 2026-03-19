var number = function(busStops){
    //set a count of the number of people on the bus
    let count = 0
    //for each element of busStops add the number of people getting on the bus
    for(let i=0; i<busStops.length; i++){
      count += busStops[i][0]
    //subtract the number of people getting off of the bus. 
      count -= busStops[i][1]
    }
    //return count
    return count
  }