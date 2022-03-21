let numeroAleatorio = Math.floor(Math.random() * 10)
console.log('O numero aleatorio é: ' + numeroAleatorio)

function Chutar() {

    let numeroInput = parseInt(document.querySelector('#valor').value)
    let elementoResultado = document.querySelector('#resultado')
    let menorMaior = document.querySelector('#menorMaior')
    let limite = document.querySelector('#limite')
        for(let i=3; i != 0; i--){
        if (numeroInput == numeroAleatorio) {
            elementoResultado.innerHTML = "Você Acertou"
            menorMaior.innerHTML = ('Parabens')
            limite.innerHTML = ('')
        }
        if (numeroInput != numeroAleatorio) {
            elementoResultado.innerHTML = ('errou')
            limite.innerHTML = ("Ainda restam " + i + " chances")
                if (numeroAleatorio < numeroInput) {
                    menorMaior.innerHTML = ('O numero é menor que ' + numeroInput)
                }
                else if (numeroAleatorio > numeroInput) {
                    menorMaior.innerHTML = ('O numero é maior que ' + numeroInput)
                    
                }
        }
        else if (numeroInput > 10 || numeroInput < 0) {
            elementoResultado.innerHTML = ('O numero não deve ser MAIOR que 10 ou MENOR que 0')
        }
    if (i >= 3) {
        limite.innerHTML = ('Atingiu o limite de tentativas, o numero aleatorio é: ' + numeroAleatorio)
    }
}}