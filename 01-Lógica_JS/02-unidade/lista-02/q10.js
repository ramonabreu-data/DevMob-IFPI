// Função para calcular a média 
function calcularMediaAlturasMaisDe50Anos(pessoas) {

    //def variáveis
    let somaAlturas = 0;
    let contadorPessoasMaisDe50Anos = 0;

    //loop
  
    for (let i = 0; i < pessoas.length; i++) {
      let pessoa = pessoas[i];
        
      //decisão
      if (pessoa.idade > 50) {
        somaAlturas += pessoa.altura;
        contadorPessoasMaisDe50Anos++;
      }
    }
  
    if (contadorPessoasMaisDe50Anos > 0) {
      let mediaAlturas = somaAlturas / contadorPessoasMaisDe50Anos;
      console.log("Média das alturas das pessoas com mais de 50 anos: " + mediaAlturas.toFixed(2));
    } else {
      console.log("Nenhuma pessoa com mais de 50 anos foi informada.");
    }
  }
  
  //definição da variável array
  let pessoas = [];
  let idade = parseInt(prompt("Digite a idade da pessoa (0 ou negativo para encerrar):"));
  
  //loop
  while (idade > 0) {
    let altura = parseFloat(prompt("Digite a altura da pessoa:"));
    pessoas.push({ idade: idade, altura: altura });
    idade = parseInt(prompt("Digite a idade da pessoa (0 ou negativo para encerrar):"));
  }
  
  //execução
  calcularMediaAlturasMaisDe50Anos(pessoas);
  