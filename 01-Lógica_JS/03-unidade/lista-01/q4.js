// Cria um vetor para armazenar as notas dos alunos
let notas = [];

// Loop para ler as notas dos alunos
for (let i = 0; i < 80; i++) {
  let nota = parseFloat(prompt("Digite a nota do aluno " + (i + 1) + ":"));
  notas.push(nota);
}

// Exibe a nota de cada aluno
console.log("Notas dos alunos:");
for (let i = 0; i < notas.length; i++) {
  console.log("Aluno " + (i + 1) + ": " + notas[i]);
}

// Calcula a média da turma
let somaNotas = 0;
for (let i = 0; i < notas.length; i++) {
  somaNotas += notas[i];
}
let mediaTurma = somaNotas / notas.length;

// Exibe a média da turma
console.log("Média da turma: " + mediaTurma.toFixed(2));
