/*1.	Faça um programa que receba quatro notas de um aluno,
 calcule e mostre a média aritmética das notas e a mensagem de 
 aprovado ou reprovado, considerando para aprovação média 7. */



// Função que calcula a média aritmética das notas
function calcularMedia(nota1, nota2, nota3, nota4) {
    let soma = nota1 + nota2 + nota3 + nota4;
    let media = soma / 4;
    return media;
  }
  
  // Função que verifica se o aluno foi aprovado ou reprovado
  function verificarAprovacao(media) {
    if (media >= 7) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
  
  // Exemplo de uso das funções
  let nota1 = parseFloat(prompt("Digite a primeira nota:"));
  let nota2 = parseFloat(prompt("Digite a segunda nota:"));
  let nota3 = parseFloat(prompt("Digite a terceira nota:"));
  let nota4 = parseFloat(prompt("Digite a quarta nota:"));
  
  let media = calcularMedia(nota1, nota2, nota3, nota4);
  let situacao = verificarAprovacao(media);
  
  console.log("Média: " + media);
  console.log("Situação: " + situacao);
  