function gerar() {
  var inicio = document.getElementById('txti')
  var fim = document.getElementById('txtf')
  var passo = document.getElementById('txtp')
  var res = document.getElementById('res')

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = `[erro] coloque todas as info.`
  } else {
    res.innerHTML = `contando: <br>`
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (p <= 0) {
      res.innerHTML = `passo invalido (colocando passo como 1) <br>`
      p = 1
    }
    if (i < f) {
      for (var c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} `
      }
    } else {
      for (var c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} `
      }
    }
  }
}
