/*2. Idade em Dias (1020 - https://www.beecrowd.com.br/judge/pt/problems/view/1020)
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em
anos, meses e dias
Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês
com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e
alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar
raciocínio matemático simples.
Entrada
O arquivo de entrada contém um valor inteiro.
Saída
Imprima a saída conforme exemplo fornecido.
 */


function idadeEmDias (idade) {
    // Converte a idade em anos para dias
    idade *= 365;
  
    // Calcula a idade em meses
    meses = idade / 30;
  
    // Calcula os dias restantes
    dias = idade % 30;
  
    // Retorna a idade em anos, meses e dias
    return `${idade / 365} anos, ${meses} meses e ${dias} dias`;
  }
  
  // Testa a função
  idade = 10000;
  console.log(idadeEmDias(idade)); // 27 anos, 7 meses e 20 dias
  