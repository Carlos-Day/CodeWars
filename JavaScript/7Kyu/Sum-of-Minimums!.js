function sumOfMinimums(arr) {
    //transform each element to only be the minimum num of the arr. Add the nums together, return
    return arr.map((element) => Math.min(...element)).reduce((acc, curr) => acc + curr, 0)
  }