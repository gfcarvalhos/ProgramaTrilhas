//Multa biblioteca

function calculoDeMulta(diasEmAtraso) {
  return (diasEmAtraso * 0.5).toFixed(2);
}

function main(dias) {
  console.log(`Aluno está com ${dias} dia(s) em atraso e deve pagar: R$ ${calculoDeMulta(dias)}`);
}

let dias = 7; //Dias em atraso
main(dias);
