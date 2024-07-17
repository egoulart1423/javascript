function fatorial(n) {
  let fat = 1
  for(let i = n; i > 1; i--) {
    fat *= i
  }

  console.log(fat)
}

fatorial(5)

//4 * 4 * 3 * 2 * 1 = 