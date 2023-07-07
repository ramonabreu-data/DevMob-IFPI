// Solicita ao usuário que digite um número inteiro
let numero = parseInt(prompt("Digite um número inteiro:"));

// Variável para armazenar a soma dos divisores
let somaDivisores = 0;

// Loop que itera de 1 até o número anterior ao número digitado
for (let i = 1; i < numero; i++) {
  // Verifica se o número é divisível por i
  if (numero % i === 0) {
    // Se for divisível, adiciona i à soma dos divisores
    somaDivisores += i;
  }
}

// Verifica se a soma dos divisores é igual ao número digitado
if (somaDivisores === numero) {
  // Se forem iguais, o número é perfeito
  console.log(numero + " é um número perfeito.");
} else {
  // Caso contrário, o número não é perfeito
  console.log(numero + " não é um número perfeito.");
}
