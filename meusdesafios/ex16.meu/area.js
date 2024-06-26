function gerar() {
  var res = document.getElementById('res');
  var tabu = document.getElementById('txtnum');
  var num = Number(tabu.value);

    if (num <= 10) {
      var tabuada = "";
      for (var i = 1;i <= 10; i++ ) {
        tabuada += `${num} x ${i} = ${num * i}<br>`;
      }
      res.innerHTML = tabuada;
    } else {
      res.innerHTML =  'adicione um numero valido buro.';
    }
} 