///variáveis

let nomeCompleto = prompt("Digite o nome completo:");

// Utilizamos o método split() para dividir o nome completo em um array de palavras
let palavras = nomeCompleto.split(" ");

// O último elemento do array de palavras é considerado o sobrenome
let sobrenome = palavras[palavras.length - 1];

//saída

console.log("Sobrenome: " + sobrenome);
