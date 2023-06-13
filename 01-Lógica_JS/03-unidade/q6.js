
//variável
let codigo = "3-14-12-15-20-19-1-4-14-17";

//replace
let palavra = codigo
  .replace(/1/g, 'a')
  .replace(/3/g, 'c')
  .replace(/4/g, 'd')
  .replace(/12/g, 'm')
  .replace(/14/g, 'o')
  .replace(/15/g, 'p')
  .replace(/17/g, 'r')
  .replace(/19/g, 't')
  .replace(/20/g, 'u');

  //Saída
console.log("Palavra gerada: " + palavra);
