// Função para calcular a soma dos números pares e ímpares
function calcularSomaParesImpares(numeros) {

    //def variáveis
    let somaPares = 0;
    let somaImpares = 0;
  
    //loop
    for (let i = 0; i < numeros.length; i++) {
      let numero = numeros[i];
        
      //decisão
      if (numero % 2 === 0) {
        somaPares += numero;
      } else {
        somaImpares += numero;
      }
    }
  
    //saida
    console.log("Soma dos números pares: " + somaPares);
    console.log("Soma dos números ímpares: " + somaImpares);
  }
  

  let numeros = [];
  
  for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt("Digite o número " + i + ":"));
    numeros.push(numero);
  }
  
  calcularSomaParesImpares(numeros);
  