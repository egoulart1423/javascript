let valor = [3, 6, 8, 2, 1]
valor.sort()
/*
console.log(valor[0])
console.log(valor[1])
console.log(valor[2])
console.log(valor[3])
console.log(valor[4])
*/
/*
for (let i = 0;i < valor.length;i++) {
  console.log(`A posição é ${i} e o número é ${valor[i]}`)
}
*/ 
for (let pos in valor) {
  console.log(`A posição é ${pos} e o número é ${valor[pos]}`)
}