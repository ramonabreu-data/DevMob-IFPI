/*3. Seleção em Vetor I (1174 - https://www.beecrowd.com.br/judge/pt/problems/view/1174)
Faça um programa que leia um vetor A[100]. No final, mostre todas as posições do
vetor que armazenam um valor menor ou igual a 10 e o valor armazenado em cada
uma das posições. Dica: O valor de length do vetor lines no beecrowd é igual a 101.
Entrada
A entrada contém 100 valores, podendo ser inteiros, reais, positivos ou negativos.
Saída
Para cada valor do vetor menor ou igual a 10, escreva "A[i] = x", onde i é a posição do
vetor e x é o valor armazenado na posição, com uma casa após o ponto decimal. */


function selectionSort (vetor) {
    // Itera sobre o vetor
    for (let i = 0; i < vetor.length; i++) {
      // Encontra o menor elemento a partir da posição i
      menor = i;
      for (let j = i + 1; j < vetor.length; j++) {
        if (vetor[menor] > vetor[j]) {
          menor = j;
        }
      }
  
      // Troca o menor elemento com o elemento na posição i
      aux = vetor[menor];
      vetor[menor] = vetor[i];
      vetor[i] = aux;
    }
  
    // Retorna o vetor ordenado
    return vetor;
  }
  
  // Testa a função
  vetor = [1, 5, 2, 0, 3, 4];
  vetorOrdenado = selectionSort(vetor);
  console.log(vetorOrdenado); // [0, 1, 2, 3, 4, 5]
  