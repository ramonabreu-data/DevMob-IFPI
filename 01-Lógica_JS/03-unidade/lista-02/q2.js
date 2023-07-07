// Solicita ao usuário que digite um número inteiro de até 4 dígitos
let numero = parseInt(prompt("Digite um número inteiro de até 4 dígitos:"));
let numeroInvertido = 0;

// Verifica se o número tem até 4 dígitos
if (numero >= 0 && numero <= 9999) {
  while (numero > 0) {
    // Obtém o último dígito do número
    let ultimoDigito = numero % 10;

    // Acrescenta o último dígito ao número invertido, multiplicado por 10
    numeroInvertido = numeroInvertido * 10 + ultimoDigito;

    // Remove o último dígito do número
    numero = Math.floor(numero / 10);
  }

  // Exibe o número invertido
  console.log("Número invertido: " + numeroInvertido);
} else {
  // Exibe uma mensagem de erro se o número digitado tiver mais de 4 dígitos
  console.log("O número digitado deve ter até 4 dígitos.");
}
