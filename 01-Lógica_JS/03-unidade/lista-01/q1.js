// Cria um vetor para armazenar as notas dos alunos
let notas = [];

// Loop para ler as notas dos alunos
for (let i = 0; i < 10; i++) {
  let nota = parseFloat(prompt("Digite a nota do aluno " + (i + 1) + ":"));
  notas.push(nota);
}

// Exibe as notas maiores que 5.0
console.log("Notas maiores que 5.0:");
for (let i = 0; i < notas.length; i++) {
  if (notas[i] > 5.0) {
    console.log(notas[i]);
  }
}
