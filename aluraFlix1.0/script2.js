let listaFilmes = [""]
function adicionarFilmes() {
    let pegarInput = document.querySelector('#addFilmes').value
    listaFilmes = pegarInput

        document.write("<img src= " + listaFilmes + ">")


}