
//variáveis
let frase = prompt("Digite uma frase:");
let contadorEspacos = 0;


for (let i = 0; i < frase.length; i++) {
    //decisão
  if (frase[i] === " ") {
    contadorEspacos++;
  }
}

//saída
console.log("Número de espaços em branco: " + contadorEspacos);
