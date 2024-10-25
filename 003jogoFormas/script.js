//TEMPORIZADOR

var temporizador = document.getElementById('temporizador');
var segundos = 30;

var ativarIntervalo = function() { //função 01
  temporizador.innerHTML = `${segundos} segundos`;

  var intervalo = setInterval(function() { //função 02 (set interval com tempo de espera de 1 segundo)

    var novoValor = parseInt(temporizador.innerHTML) - 1;
    temporizador.innerHTML = `${novoValor} segundos`;

    if (novoValor === 0) {
      clearInterval(intervalo);
      //setTimeout(ativarIntervalo, 3000); COMANDO PARA RESETAR TIMER APÓS 3 SEGUNDOS (LOOP)
    }

  }, 1000);

};
ativarIntervalo();

//COMEÇA O JOGO
let nomeCor = ["AMARELO", "VERMELHO", "AZUL", "VERDE", "ROSA", "LARANJA"];
let hexaCor = ["#ffff00", "#ff0000", "#0800ff", "#00ff08", "#e100ff", "#ff8c00"];
let bloco = document.getElementById('bloco');
let idPonto = document.getElementById('pontos');
let pontos = 0;

function certo(){
    pontos += 1;
    idPonto.innerHTML = `${pontos} pontos`;
    idPonto.style.color = "green";
}

function errado(){

}