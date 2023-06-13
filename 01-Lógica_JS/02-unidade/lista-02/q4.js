// Função 
function encontrarMaiorNumero(numero1, numero2, numero3) {
    let maiorNumero = numero1;
  
    //condicionais
    if (numero2 > maiorNumero) {
      maiorNumero = numero2;
    }
  
    if (numero3 > maiorNumero) {
      maiorNumero = numero3;
    }
  
    return maiorNumero;
  }
  
  // uso da função
  let numero1 = parseFloat(prompt("Digite o primeiro número:"));
  let numero2 = parseFloat(prompt("Digite o segundo número:"));
  let numero3 = parseFloat(prompt("Digite o terceiro número:"));
  
  let maiorNumero = encontrarMaiorNumero(numero1, numero2, numero3);
  
  //Saída
  console.log("O maior número é: " + maiorNumero);
  