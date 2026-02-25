function bouncingBall(h,  bounce,  window) {
    //check if any of the base conditions are not fulfilled, if not then return -1
      if( h < 0 || bounce < 0 || bounce >= 1 || window >= h){
        return -1
      }
    //make a count of the num of times the ball passes by the window
      let count = 0
    //when the ball passes the window increment count. 
    //The ball will keep passing by the window as long as its current height is > window 
      while(h>window){
        count++
        h*= bounce
    //the ball will pass by the window on the way up if current h is over window height. 
        if(h>window){
          count++
        }
      }
      
      return count
      
    }