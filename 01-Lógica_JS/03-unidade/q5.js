//variáveis
let frase = prompt("Digite uma frase:");
let palavraOriginal = prompt("Digite uma palavra da frase para substituição:");
let palavraNova = prompt("Digite a nova palavra:");

let novaFrase = frase.replace(palavraOriginal, palavraNova);


//saída
console.log("Frase original: " + frase);
console.log("Frase modificada: " + novaFrase);
