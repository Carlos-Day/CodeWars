var number=function(array){
    //your awesome code here
    //map each value to transform to the longer string. Index +1 for each num.  
    
    return  array.map((string, index) =>{
      return `${index+1}: ${string}`
    })
  }
