function evaporator(content, evapPerDay, threshold) {
    //find the threshold in ml
    let minLiquid = (threshold/100) *content
    //create a count var. 
    let count = 0
    //while the content is >= threshold in ml continue a loop
    while(content >= minLiquid){
    //increment count. multiple content by 1-evapPerDay/100
    count++
    content = content*(1-evapPerDay/100)
    }
    return count
  }