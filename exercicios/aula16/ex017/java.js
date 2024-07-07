function gerar(){
  var num = document.getElementById("txtn")
  var sel = document.getElementById('sel')

  if (num.value.length == 0) {
    window.alert('COLOQUE ALGUM NUMERO!')
  } else {
    var n = Number(num.value)
    sel.innerHTML = ''
    for (var c = 1;c <= 10; c++){
      var item = document.createElement('option')
      item.text = `${n} x ${c} = ${n * c}`
      sel.appendChild(item)
    }
  }
}