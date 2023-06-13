// Função  múltiplo de 3
function verificarMultiploDeTres(numero) {
    if (numero % 3 === 0) {
      return "é múltiplo de 3";
    } else {
      return "não é múltiplo de 3";
    }
  }
  
  //  uso da função
  let numero = parseInt(prompt("Digite um número:"));
  
  let mensagem = verificarMultiploDeTres(numero);
  
  //Saída
  console.log(numero + " " + mensagem);
  