let res = document.getElementById("res")
let dados = []

function enviar() {
  let num = document.getElementById("txtn")
  let n = Number(num.value)
  
  if (num.value == "") {
    window.alert('Bota o número parça')
  } else if (n < 1 || n > 100) {
    window.alert('De 1 a 100 parça não intendeu?')
  } else {
    dados.push(n)
    res.innerHTML = `${dados}`
  }

  num.value = ''
}

function finalizar() {  
  let menornum = dados[0]
  let maiornum = dados[0]

  for(let i = 1; i < dados.length; i++) {
    if (dados[i] > maiornum) {
      maiornum = dados[i]
    }
  }

  for(let e = 1; e < dados.length; e++) {
    if (dados[e] < menornum) {
      menornum = dados[e]
    }
  }

  let quantidade = dados.length
  document.getElementById('final').innerText = `Você adicionou ${quantidade} números!`
  document.getElementById('final').innerHTML += `<br>O maior número adicionado é ${maiornum}` 
  document.getElementById('final').innerHTML += `<br>O menor número adicionado é ${menornum}`
  document.getElementById('final').innerHTML += `<br>O primeiro valor adicionado é ${dados[0]}`
}