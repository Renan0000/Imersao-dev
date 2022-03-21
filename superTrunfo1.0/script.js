let carta1 = {
    nome: 'Luffy',
    atributos: {
      ataque: 7,
      defesa: 10,
      magia: 3
    }
  };
  
  let carta2 = {
    nome: 'Gon',
    atributos: {
      ataque: 9,
      defesa: 7,
      magia: 10
    }
  };
  
  let carta3 = {
    nome: 'TUX',
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
    exibirOpcoes()
  }
  
  function exibirOpcoes() {
    let opcoes = document.querySelector('#opcoes')
    let opcoesTexto = ""
      for (let atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
      }
    opcoes.innerHTML = opcoesTexto
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
    let elementoResultado = document.querySelector('#resultado')
   let valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
   let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
   
   if (valorCartaJogador >  valorCartaMaquina) {
     elementoResultado.innerHTML = "Voce venceu"
   }
   else if (valorCartaMaquina > valorCartaJogador) {
     elementoResultado.innerHTML = "Voce perdeu, carta da maquina eh maior"
   }
   else {
     elementoResultado.innerHTML = "Empate"
   }
  }
  