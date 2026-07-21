"use strict";

function flattenAndSort(array) {
  //remove all of the elements from the array and save them to a new value. 
  let arr = array.reduce((acc, curr) => acc.concat(curr), [])
  //sort the array ints. 
  return arr.sort((a,b) => a-b)
}