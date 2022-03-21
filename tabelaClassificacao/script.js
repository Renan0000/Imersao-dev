let jogador1 = {
  nome: "Jogador 1",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
let jogador2 = {
  nome: "Jogador 2",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
let jogador3 = {
  nome: "Jogador 3",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

function calculaPontos(jogador) {
  let pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}
jogador1.pontos = calculaPontos(jogador1);
jogador2.pontos = calculaPontos(jogador2);
jogador3.pontos = calculaPontos(jogador3);

let jogadores = [jogador1, jogador2, jogador3];

function exibirJogadoresNaTela(jogadores) {
  let elemento = "";
  for (let i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td></tr>";
  }
  let tabelaJogadores = document.querySelector("#tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibirJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  let jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  let jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  let jogador = jogadores[i];
  jogador.derrotas++;
  exibirJogadoresNaTela(jogadores);
}

