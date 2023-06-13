// Função para calcular a média entre dois números
function calcularMedia(numero1, numero2) {
    return (numero1 + numero2) / 2;
  }
  
  // Função para calcular a diferença entre o maior e o menor número
  function calcularDiferenca(numero1, numero2) {
    return Math.abs(numero1 - numero2);
  }
  
  // Função para calcular o produto entre dois números
  function calcularProduto(numero1, numero2) {
    return numero1 * numero2;
  }
  
  // Função para calcular a divisão do primeiro número pelo segundo número
  function calcularDivisao(numero1, numero2) {
    return numero1 / numero2;
  }
  
 //variáveis armazenadas
  let numero1 = parseFloat(prompt("Digite o primeiro número:"));
  let numero2 = parseFloat(prompt("Digite o segundo número:"));
  
  let escolha = parseInt(prompt("Digite a escolha:\n1. Calcular média\n2. Calcular diferença\n3. Calcular produto\n4. Calcular divisão"));
  
  //decisão da função  
  if (escolha === 1) {
    let media = calcularMedia(numero1, numero2);
    //saída
    console.log("A média entre os números é: " + media);
  } else if (escolha === 2) {
    let diferenca = calcularDiferenca(numero1, numero2);
    //saída
    console.log("A diferença entre o maior e o menor número é: " + diferenca);
  } else if (escolha === 3) {
    let produto = calcularProduto(numero1, numero2);
    //saída
    console.log("O produto entre os números é: " + produto);
  } else if (escolha === 4) {
    let divisao = calcularDivisao(numero1, numero2);
    //saída
    console.log("A divisão do primeiro número pelo segundo número é: " + divisao);
  } else {
    //saída
    console.log("Escolha inválida");
  }
  