var idade = 15
idade++
console.log(`você tem ${idade}!`)
if (idade < 16){
  console.log('não vota')
}else if (idade < 18 || idade >= 67){
    console.log('opcional')
  } else {
    console.log('voto obrigatorio')
}
