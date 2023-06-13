
//variável
let palavra = "Ifpi";


//laço
for (let i = 1; i <= palavra.length; i++) {

    //saída
  console.log(palavra.substr(0, i));
}

for (let i = palavra.length - 1; i > 0; i--) {
    //saída
  console.log(palavra.substr(0, i));
}
