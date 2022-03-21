let carta1 = {
  nome: 'Luffy',
  imagem: 'https://ovicio.com.br/wp-content/uploads/2021/06/20210601-one-piece-wano-luffy-cosplay-1252700.jpeg',
  atributos: {
    ataque: 7,
    defesa: 10,
    magia: 3
  }
};

let carta2 = {
  nome: 'Gon',
  imagem: 'http://pm1.narvii.com/6407/e66f5edbd6c20635b39b640f6f9d98803ff755b3_00.jpg',
  atributos: {
    ataque: 9,
    defesa: 7,
    magia: 10
  }
};

let carta3 = {
  nome: 'TUX',
  imagem: 'https://lrodrigo.sgs.lncc.br/wp/wp-content/uploads/2014/10/Tux.png',
  atributos: {
    ataque: 1000,
    defesa: 1000,
    magia: 1000
  }
};

let cartas = [carta1,carta2,carta3]

let cartaJogador
let cartaMaquina

function sortearCarta() {
  let numeroCartaMaquina = parseInt(Math.random() * 3)
cartaMaquina = cartas[numeroCartaMaquina]
 
  let numeroCartaJogador = parseInt(Math.random() * 3)
    while(numeroCartaJogador == numeroCartaMaquina) {
      let numeroCartaJogador = parseInt(Math.random() * 3)
}
cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)
  
  document.querySelector('#btnSortear').disabled =  true;
  document.querySelector('#btnJogar').disabled = false;
  exibirCartaJogador( )
}



function obtemAtributoSelecionado() {
  let radioAtributos = document.getElementsByName("atributo")
  for (let i = 0; i < radioAtributos.length;i++) {
    if(radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
}

function jogar(){
 let atributoSelecionado = obtemAtributoSelecionado()
 let divResultado = document.querySelector('#resultado')
 
 if (cartaJogador.atributos[atributoSelecionado] >  cartaMaquina.atributos[atributoSelecionado]) {
   HTMLResultado = "<p class='resultado-final'> Venceu</p> "
 }
 else if (cartaMaquina.atributos[atributoSelecionado] > cartaJogador.atributos[atributoSelecionado]) {
  HTMLResultado = "<p class='resultado-final'> Você perdeu, a carta da maquina é maior</p> "
 }
 else {
  HTMLResultado = "<p class='resultado-final'>Empate</p> "
 }
 divResultado.innerHTML = HTMLResultado;

 document.querySelector('#btnJogar').disabled = true
 exibirCartaMaquina()
}

function exibirCartaJogador() {
  let divCartaJogador = document.querySelector("#carta-jogador")
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  let tagHTML = "<div id='opcoes' class='carta-status'>"

  let opcoesTexto = ""
  for (let atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  }
  let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}

function exibirCartaMaquina() {
  let divCartaMaquina = document.querySelector("#carta-maquina")
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  let tagHTML = "<div id='opcoes' class='carta-status'>"

  let opcoesTexto = ""
  for (let atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
  }
  let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}
