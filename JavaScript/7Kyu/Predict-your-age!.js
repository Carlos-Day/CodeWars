function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    //add all ages to an array
    let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
    //map to multiply each age by itself. then reduce to add them together. Math.sqrt, /2
    //round down. 
    return Math.floor(Math.sqrt(arr.map((age)=> age*age).reduce((acc, curr) => acc + curr, 0))/2)
  }