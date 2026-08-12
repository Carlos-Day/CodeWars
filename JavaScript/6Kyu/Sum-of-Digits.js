function digitalRoot(n) {
    do{ n = n.toString().split('').reduce((acc, d) => Number(acc) + Number(d), 0)
      }while(n> 9)
    return n
  }