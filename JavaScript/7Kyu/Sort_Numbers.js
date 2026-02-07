function solution(nums){
    //if nums is null or empty then return an empty arr
    if(!Boolean(nums)){
      return []
    }else{
    //else sort the array numerically. 
    return nums.sort((a,b) => a-b)
    }
  }