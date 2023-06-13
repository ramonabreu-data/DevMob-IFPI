// Função para calcular estatísticas com base nos dados das pessoas
function calcularEstatisticasPessoas(pessoas) {

    //variáveis
    let contadorIdadeSuperior50 = 0;
    let somaAlturas = 0;
    let contadorPessoasAltura10a20 = 0;
    let contadorPessoasPesoInferior40 = 0;
  
    //conditionais
    for (let i = 0; i < pessoas.length; i++) {
      let pessoa = pessoas[i];
  
      if (pessoa.idade > 50) {
        contadorIdadeSuperior50++;
      }
  
      if (pessoa.idade >= 10 && pessoa.idade <= 20) {
        somaAlturas += pessoa.altura;
        contadorPessoasAltura10a20++;
      }
  
      if (pessoa.peso < 40) {
        contadorPessoasPesoInferior40++;
      }
    }
  

    let mediaAlturas = somaAlturas / contadorPessoasAltura10a20;
    let percentualPessoasPesoInferior40 = (contadorPessoasPesoInferior40 / pessoas.length) * 100;
  
    //saida
    console.log("Quantidade de pessoas com idade superior a 50 anos: " + contadorIdadeSuperior50);
    console.log("Média das alturas das pessoas com idade entre 10 e 20 anos: " + mediaAlturas);
    console.log("Percentual de pessoas com peso inferior a 40 quilos: " + percentualPessoasPesoInferior40 + "%");
  }
  
  //definição da variável PESSOAS   
  let pessoas = [];
  
  for (let i = 1; i <= 25; i++) {
    let idade = parseInt(prompt("Digite a idade da pessoa " + i + ":"));
    let altura = parseFloat(prompt("Digite a altura da pessoa " + i + ":"));
    let peso = parseFloat(prompt("Digite o peso da pessoa " + i + ":"));
  
    pessoas.push({
      idade: idade,
      altura: altura,
      peso: peso,
    });
  }
  
  calcularEstatisticasPessoas(pessoas);
  