let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function inNumero(n) {
  if (Number(n)) < 1 || Number(n) > 100 {
    return false
  } else {
    return true
  }
}

function inLista(n, l) {
  if(l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  
}

