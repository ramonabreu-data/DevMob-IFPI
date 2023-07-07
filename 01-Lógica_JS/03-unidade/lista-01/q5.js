// Cria um array para armazenar os números digitados
let numeros = [];

// Loop para solicitar os números ao usuário
for (let i = 0; i < 3; i++) {
  let numero = parseInt(prompt("Digite o número " + (i + 1) + ":"));
  numeros.push(numero);
}

// Exibe o array original
console.log("Array original: " + numeros);

// Inverte a sequência dos números no array
numeros.reverse();

// Exibe o array invertido
console.log("Array invertido: " + numeros);
