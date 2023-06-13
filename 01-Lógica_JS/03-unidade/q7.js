
//variaveis
let numero = parseInt(prompt("Digite um número:"));
let numeroPorExtenso = "";


//laço
while (numero > 0) {
  let digito = numero % 10;
  numeroPorExtenso = obterExtensoDigito(digito) + ", " + numeroPorExtenso;
  numero = Math.floor(numero / 10);
}


//Saída
console.log("Resultado: " + numeroPorExtenso);

// Função para obter o extenso de um dígito
function obterExtensoDigito(digito) {
  switch (digito) {
    case 0:
      return "zero";
    case 1:
      return "um";
    case 2:
      return "dois";
    case 3:
      return "três";
    case 4:
      return "quatro";
    case 5:
      return "cinco";
    case 6:
      return "seis";
    case 7:
      return "sete";
    case 8:
      return "oito";
    case 9:
      return "nove";
    default:
      return "";
  }
}
