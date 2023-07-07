function encontrarPrimeiroNegativo(colecao) {
    for (let i = 0; i < colecao.length; i++) {
      if (colecao[i] < 0) {
        return i;
      }
    }
  
    return -1; // Retorna -1 se não houver números negativos na coleção
  }
  
  // Exemplo de uso da função
  let numeros = [2, 4, -1, 6, -3, 8, 0];
  
  let indiceNegativo = encontrarPrimeiroNegativo(numeros);
  
  if (indiceNegativo !== -1) {
    console.log("O primeiro número negativo está no índice " + indiceNegativo);
  } else {
    console.log("Não há números negativos na coleção.");
  }
  