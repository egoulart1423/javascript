function enviar() {
  let num = document.getElementById("txtn")
  let res = document.getElementById("res")
  let n = Number(num.value)

  if (num.value.length == 0) {
    window.alert('Bota o número parça')
  } else if (n < 1 || n > 100) {
    window.alert('De 1 a 100 parça não intendeu?')
  } else {
    res.innerHTML += `Valor ${n} adicionado <br>`
  }
}