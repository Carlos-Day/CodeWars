function findOutlier(integers){
    //make a count of even and odd nums
    let even = 0
    let odd = 0
    //iterate over the arr and note how many even and odd ints there are. 
    for(let i=0; i<integers.length; i++){
      integers[i] % 2 === 0 ? even++ : odd++
    }
    //if there are more even ints then return the outlier odd int. 
    if(even > odd){
      return integers.find((element) => element % 2 !== 0)
    }else{
    //otherwise return the first even int. 
      return integers.find((element) => element % 2 === 0)
    }
  }