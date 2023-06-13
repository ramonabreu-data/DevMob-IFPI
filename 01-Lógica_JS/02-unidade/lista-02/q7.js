// Função para imprimir o quadrado de cada número
function imprimirQuadradoDosNumeros(numeros) {
    for (let i = 0; i < numeros.length; i++) {
      let numero = numeros[i];
      let quadrado = numero ** 2;
      console.log("O quadrado de " + numero + " é " + quadrado);
    }
  }
  
  //definição da variável
  let numeros = [];
  
  for (let i = 1; i <= 5; i++) {
    let numero = parseInt(prompt("Digite o número " + i + ":"));
    numeros.push(numero);
  }
  
  
  imprimirQuadradoDosNumeros(numeros);
  