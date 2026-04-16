function dnaStrand(dna){
    return dna.split('').map((element) => {
      switch(element){
          case "A": 
          return "T"
          break;
          
          case "T":
          return "A"
          break;
          
          case "C":
          return "G"
          break;
          
          case "G":
          return "C"
          break;
      }
    }).join('')
  }