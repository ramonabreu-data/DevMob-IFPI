/*4. Dividindo X por Y (1116 - https://www.beecrowd.com.br/judge/pt/problems/view/1116)
Escreva um algoritmo que leia 2 números e imprima o resultado da divisão do
primeiro pelo segundo. Caso não for possível mostre a mensagem “divisao
impossivel” para os valores em questão.
Entrada
A entrada contém um número inteiro N. Este N será a quantidade de pares de
valores inteiros (X e Y) que serão lidos em seguida.
Saída
Para cada caso mostre o resultado da divisão com um dígito após o ponto decimal,
ou “divisao impossivel” caso não seja possível efetuar o cálculo.
Obs.: Cuide que a divisão entre dois inteiros em algumas linguagens como o C e C++
gera outro inteiro. Utilize cast :)
 */

function dividir (x, y) {
    // Verifica se o divisor é zero
    if (y === 0) {
      throw new Error("Divisor não pode ser zero.");
    }
  
    // Calcula a divisão
    divisao = x / y;
  
    // Retorna a divisão com um dígito após a vírgula
    return divisao.toFixed(1);
  }
  
  // Testa a função
  x = 10;
  y = 2;
  console.log(dividir(x, y)); // 5.0
  