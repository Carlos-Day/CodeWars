function evenNumbers(array, number) {
    //make a new arr with all of the odd numbers removed from array. 
    //make a copy of the last "number" digits of the array. return it. 
    return array.filter((element) => element%2 === 0).slice(-number)
  }