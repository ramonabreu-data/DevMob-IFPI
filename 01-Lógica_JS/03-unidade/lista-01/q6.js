// Pergunta ao usuário quantos números deseja inserir no array
let tamanhoArray = parseInt(prompt("Digite o tamanho do array:"));

// Cria um array vazio
let numeros = [];

// Loop para preencher os elementos do array
for (let i = 0; i < tamanhoArray; i++) {
  let numero = parseInt(prompt("Digite o número " + (i + 1) + ":"));
  numeros.push(numero);
}

// Exibe o array original
console.log("Array original: " + numeros);

// Cria um novo array com a sequência invertida
let numerosInvertidos = numeros.slice().reverse();

// Exibe o array invertido
console.log("Array invertido: " + numerosInvertidos);
