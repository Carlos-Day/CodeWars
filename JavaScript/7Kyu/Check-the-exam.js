function checkExam(array1, array2) {
    //set a count to 0
     let count = 0
     //for each answer in the correct array. 
     for(let i=0; i<array1.length; i++){
     //check to see if the answer is blank. if so add 0 to count. 
       if(array2[i] == ''){
         count += 0
     //else if the answer is the same add four to count
       }else if(array1[i] == array2[i]){
         count += 4
       }else{
     //else subtract 1 from count. 
         count-= 1
       }
     }
     //if total <= 0 return 0 else return count. 
     if(count <=0){
        return 0
        }else{
       return count
     }
   }