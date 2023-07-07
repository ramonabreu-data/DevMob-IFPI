// Cria vetores para armazenar os dados dos alunos
let nomes = [];
let notas1 = [];
let notas2 = [];

// Loop para ler os dados dos alunos
for (let i = 0; i < 5; i++) {
  let nome = prompt("Digite o nome do aluno " + (i + 1) + ":");
  let nota1 = parseFloat(prompt("Digite a primeira nota do aluno " + (i + 1) + ":"));
  let nota2 = parseFloat(prompt("Digite a segunda nota do aluno " + (i + 1) + ":"));

  nomes.push(nome);
  notas1.push(nota1);
  notas2.push(nota2);
}

// Exibe a listagem com nome, notas e média de cada aluno
console.log("Listagem de alunos:");
for (let i = 0; i < 5; i++) {
  let media = (notas1[i] + notas2[i]) / 2;
  console.log("Aluno: " + nomes[i]);
  console.log("Nota 1: " + notas1[i]);
  console.log("Nota 2: " + notas2[i]);
  console.log("Média: " + media.toFixed(2));
  console.log("---------------------------");
}
