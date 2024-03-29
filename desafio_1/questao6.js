//Fatorial

function calculoDeFatorial(numero) {
  let resultadoFatorial = 1;
  for (let i = numero; i >= 1; i--) {
    resultadoFatorial *= i;
  }
  return resultadoFatorial;
}

function main(valorParaCalcular) {
  let resultado = calculoDeFatorial(valorParaCalcular);
  console.log(`O fatorial de ${valorParaCalcular} é ${resultado}.`);
}

let valor = 12;
main(valor);
