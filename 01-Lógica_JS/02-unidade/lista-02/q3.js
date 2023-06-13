// Função  menor número entre dois números?
function encontrarMenorNumero(numero1, numero2) {
    if (numero1 < numero2) {
      return numero1;
    } else {
      return numero2;
    }
  }
  
  // uso da função
  let numero1 = parseFloat(prompt("Digite o primeiro número:"));
  let numero2 = parseFloat(prompt("Digite o segundo número:"));
  
  let menorNumero = encontrarMenorNumero(numero1, numero2);
  
  //Saída
  console.log("O menor número é: " + menorNumero);
  