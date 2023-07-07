// Função para calcular as parcelas
function calcularParcelas(valorCompra, numParcelas) {
    let valorParcela = Math.floor(valorCompra / numParcelas); // Valor base das parcelas
    let resto = valorCompra % numParcelas; // Resto da divisão
  
    let parcelas = []; // Array para armazenar os valores das parcelas
  
    // Preenche as primeiras parcelas com o valor base + 1, caso tenha resto
    for (let i = 0; i < resto; i++) {
      parcelas.push(valorParcela + 1);
    }
  
    // Preenche as parcelas restantes com o valor base
    for (let i = resto; i < numParcelas; i++) {
      parcelas.push(valorParcela);
    }
  
    return parcelas; // Retorna o array com os valores das parcelas
  }
  
  // Recebe o valor da compra e o número de parcelas
  let valorCompra = parseInt(prompt("Digite o valor da compra:"));
  let numParcelas = parseInt(prompt("Digite o número de parcelas:"));
  
  // Chama a função para calcular as parcelas
  let valoresParcelas = calcularParcelas(valorCompra, numParcelas);
  
  // Exibe os valores das parcelas
  console.log("Valores das parcelas:");
  for (let i = 0; i < valoresParcelas.length; i++) {
    console.log("Parcela " + (i + 1) + ": " + valoresParcelas[i]);
  }
  