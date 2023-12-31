/*1. Distância (1016 - https://www.beecrowd.com.br/judge/pt/problems/view/1016)
Dois carros (X e Y) partem em uma mesma direção. O carro X sai com velocidade
constante de 60 Km/h e o carro Y sai com velocidade constante de 90 Km/h.
Em uma hora (60 minutos) o carro Y consegue se distanciar 30 quilômetros do carro
X, ou seja, consegue se afastar um quilômetro a cada 2 minutos.
Leia a distância (em Km) e calcule quanto tempo leva (em minutos) para o carro Y
tomar essa distância do outro carro.
Entrada
O arquivo de entrada contém um número inteiro.
Saída
Imprima o tempo necessário seguido da mensagem "minutos". */

function dist (distancia) {
    // Converte a distância em quilômetros para metros
    distancia *= 1000;
  
    // Calcula o tempo em minutos
    tempo = distancia / 30;
  
    // Retorna o tempo
    return tempo;
  }
  
  // Executa a função
  distancia = 100;
  console.log(dist(distancia)); // 60
  