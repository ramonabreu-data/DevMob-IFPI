// Função para calcular e exibir a tabuada de um número
function calcularTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  
  // variável
  let numero = parseInt(prompt("Digite um número:"));
  //saída
  calcularTabuada(numero);
  