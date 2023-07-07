// Altura do muro
let altura = 10000;

// Distância que Dona Lesma sobe a cada dia
let subida = 100;

// Distância que Dona Lesma desce a cada noite
let descida = 50;

// Variável para armazenar o número de dias
let dias = 0;

// Enquanto a altura do muro for maior que 0
while (altura > 0) {
  // Incrementa o número de dias
  dias++;

  // Dona Lesma sobe a cada dia
  altura -= subida;

  // Verifica se Dona Lesma já alcançou o topo do muro
  if (altura <= 0) {
    break;
  }

  // Dona Lesma desce a cada noite
  altura += descida;
}

// Exibe o número de dias necessários para Dona Lesma alcançar o topo do muro
console.log("Dona Lesma levará " + dias + " dias para chegar ao topo do muro.");
