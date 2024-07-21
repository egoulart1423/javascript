function enviar() {
  let res = document.getElementById("res")
  let num = document.getElementById("txtn")
  let n = Number(num.value)

  if (num.value.length == 0) {
    window.alert('Bota o número parça')
  } else if (n < 1 || n > 100) {
    window.alert('De 1 a 100 parça não intendeu?')
  } else {
    res.innerHTML += `Valor ${n} adicionado <br>`
  }
}

function finalizar() {
  let res = document.getElementById("res")
  let f = document.getElementById("final")
  
  let numeros = res.innerText.length
  f.innerHTML = `você adicionou ${numeros}`
}