// Cria vetores para armazenar as notas e os nomes dos alunos
let notas = [];
let nomes = [];

// Loop para ler as notas e os nomes dos alunos
for (let i = 0; i < 5; i++) {
  let nome = prompt("Digite o nome do aluno " + (i + 1) + ":");
  let nota = parseFloat(prompt("Digite a nota do aluno " + (i + 1) + ":"));

  nomes.push(nome);
  notas.push(nota);
}

// Exibe os nomes dos alunos que tiraram nota maior que 5.0
console.log("Alunos com nota maior que 5.0:");
for (let i = 0; i < notas.length; i++) {
  if (notas[i] > 5.0) {
    console.log(nomes[i]);
  }
}
