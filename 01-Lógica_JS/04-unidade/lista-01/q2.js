function exibirDataPorExtenso(dia, mes, ano) {
    // Vetores com os nomes dos meses e dos números por extenso
    const nomesMeses = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho",
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
  
    const numerosExtenso = [
      "", "um", "dois", "três", "quatro", "cinco", "seis", "sete",
      "oito", "nove", "dez", "onze", "doze", "treze", "quatorze",
      "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", "vinte",
      "vinte e um", "vinte e dois", "vinte e três", "vinte e quatro",
      "vinte e cinco", "vinte e seis", "vinte e sete", "vinte e oito",
      "vinte e nove", "trinta", "trinta e um"
    ];
  
    // Obtém o nome do mês por extenso
    let nomeMes = nomesMeses[mes - 1];
  
    // Obtém o dia por extenso
    let diaExtenso = numerosExtenso[dia];
  
    // Exibe a data no formato por extenso
    console.log(diaExtenso + " de " + nomeMes + " de " + ano);
  }
  
  // Exemplo de uso da função
  let dia = 1;
  let mes = 1;
  let ano = 2000;
  
  exibirDataPorExtenso(dia, mes, ano);
  