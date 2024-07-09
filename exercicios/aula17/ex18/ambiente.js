let num = [7, 5, 6, 8, 4]

num.push(4)
num.sort()
console.log(num)
console.log('o comprimento do vetor é ' + num.length)
console.log('o primeiro valor do vetor é ' + num[0])

let pos = num.indexOf(8) //quando não a valor no array, o js coloca -1 pra simbolizar que n tem
if (pos == -1) {
  console.log(`Não existe este valor no vetor`)
} else {
  console.log(`O valor está na posição ${pos}`)
}