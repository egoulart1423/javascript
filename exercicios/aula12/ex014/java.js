function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  if (hora >= 0 && hora <= 12) {
    msg.innerHTML = `agora são ${hora} horas!`;
    img.src = '/exercicios/aula12/ex014/imgs/manhã2.png';
    document.body.style.backgroundColor = '#e2cd9f'
  } else if (hora > 12 && hora <= 18) {
    msg.innerHTML = `agora são ${hora} horas!`;
    img.src = '/exercicios/aula12/ex014/imgs/tarde2.png';
    document.body.style.backgroundColor = '#b9846f'
  } else {
    msg.innerHTML = `agora são ${hora} horas!`;
    img.src = '/exercicios/aula12/ex014/imgs/noite2.png'
    document.body.style.backgroundColor = '#515155'
  }
}
