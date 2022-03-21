function adicionarFilme() {
    let filmeFavorito = document.querySelector("#filme").value
    if (filmeFavorito.endsWith(".jpg" || ".jpeg" || ".png")){
        listarFilmesNaTela(filmeFavorito)
    }
    else {
        alert("Favor colocar uma URL de imagem valida")
    }
    document.querySelector("#filme").value = ""  
}

function listarFilmesNaTela(filmeFavorito) {
    let elementoFilmeFavorito = "<img src=" + filmeFavorito + ">"
    let elementoListaFilmes = document.querySelector("#listaFilmes")
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito
}