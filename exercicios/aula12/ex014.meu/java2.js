function carregar() {
  var agora = new Date()
  var sao = document.getElementById('sao') 
  var horas = agora.getHours()
  console.log(horas);
  if (horas <= 12) {
    sao.innerHTML = `agora são ${horas} horas da manhã!`;
  } else if (horas < 18) {
    sao.innerHTML = `agora são ${horas} horas da tarde!`;
  } else {
    sao.innerHTML =`agora são ${horas} horas da noite!`;
  }
  }