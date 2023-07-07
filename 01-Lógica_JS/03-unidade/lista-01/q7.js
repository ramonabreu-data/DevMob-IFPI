function encontrarIndices(vetor, numero) {
  let indices = [];

  // Percorre o vetor e verifica se o número está presente em cada elemento
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
      indices.push(i);
    }
  }

  // Exibe os índices onde o número aparece
  if (indices.length > 0) {
    console.log("O número " + numero + " aparece nos seguintes índices: " + indices.join(", "));
  } else {
    console.log("O número " + numero + " não foi encontrado no vetor.");
  }
}

// Exemplo de uso da função
let vetor = [1, 3, 5, 3, 2, 3, 4];
let numero = 3;

encontrarIndices(vetor, numero);
