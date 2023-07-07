// Solicita ao usuário que digite um número inteiro
let numero = parseInt(prompt("Digite um número inteiro:"));

// Converte o número em uma string para facilitar a manipulação dos caracteres
let numeroString = numero.toString();

// Inverte a ordem dos caracteres do número
let numeroInvertidoString = numeroString.split('').reverse().join('');

// Verifica se o número original é igual ao número invertido
if (numeroString === numeroInvertidoString) {
  console.log(numero + " é um número palíndromo.");
} else {
  console.log(numero + " não é um número palíndromo.");
}
