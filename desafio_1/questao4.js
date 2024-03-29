//Numeros primos


function descobreNumeroPrimo(numero) {
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}
function organizaListaNumerosPrimos(lista) {
  let listaNumerosPrimos = [];
  for (let numero of lista) {
    let sePrimo = descobreNumeroPrimo(numero);
    if (sePrimo) {
      listaNumerosPrimos.push(numero);
    }
  }
  return listaNumerosPrimos
}

function main(listaInicial){
  let retorno = organizaListaNumerosPrimos(listaInicial);
  console.log(`Da lista, os números primos são: ${retorno.join(', ')}`);
}


let listaNumeros = [23, 16, 11, 8, 19, 14, 5, 21];
main(listaNumeros)