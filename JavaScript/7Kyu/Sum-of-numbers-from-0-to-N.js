var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      // for
        //while
      if(count === 0){
        return '0=0'
      }
      if(count<0){
        return `${count}<0`
      }
      let sum = 0
      let nums = []
      for(let i=0; i<=count; i++){
        sum+= i
        nums.push(i)
      }
      let sumText = nums.join('+')
      return `${sumText} = ${sum}`
    };
  
    return SequenceSum;
  
  })();