function real() {
    let valorElemento = document.getElementById("valor")
    let valor = valorElemento.value
    let valorEmReal = parseFloat(valor)
    return valorEmReal
}

function converterParaDollar() {
    let valorEmReal = real()
    let valorEmDolar = valorEmReal / 5.06;
    let valorArredondado = valorEmDolar.toFixed(2)
    let elementoConvertido = document.querySelector('#valorConvertidoDollar') //pegando o valor convertido do HTML
    let valorConvertido = valorEmReal + " Reais em Dolar é igual a $" + valorArredondado + "US"
    elementoConvertido.innerHTML = valorConvertido
  }

function converterParaEuro(){
    let valorEmReal = real()
    let valorEmEuro = valorEmReal / 5.51
    let valorArredondado = valorEmEuro.toFixed(2)
    let elementoConvertido = document.querySelector('#valorConvertidoEuro')
    let valorConvertido = valorEmReal + " Reais em euro é igual a €" + valorArredondado + "EU"
    elementoConvertido.innerHTML = valorConvertido
}

function converterParaLibra(){
    let valorEmReal = real()
    let valorEmLibra = valorEmReal / 6.63
    valorArredondado = valorEmLibra.toFixed(2)
    let elementoConvertido = document.querySelector('#valorConvertidoLibra')
    let valorConvertido = valorEmReal + " Reais em Libra é igual a £" + valorArredondado + "GBP"
    elementoConvertido.innerHTML = valorConvertido
}

function converterParaBitcoin(){
    let valorEmReal = real()
    let valorEmBitcoin = valorEmReal * 0.0000051
    let valorArredondado = valorEmBitcoin.toFixed(7)
    let elementoConvertido = document.querySelector('#valorConvertidoBitcoin')
    let valorConvertido = valorEmReal + " Reais em Bitcoin é igual a ฿" + valorArredondado + "BTC"
    
    elementoConvertido.innerHTML = valorConvertido
}

function converterTodos() {
    converterParaDollar()
    converterParaEuro()
    converterParaLibra()
    converterParaBitcoin()
}
  