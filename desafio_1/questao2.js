//Questão 2: Sorteio
import readlineSync from 'readline-sync';

function ordenaListaDeNumeros(lista) {
  let listaOrdenada = lista.sort((a,b) => {return a-b})
  //console.log(listaOrdenada)
  return listaOrdenada;
}

function interaction() {
  let controlador = 7; //Informa a quantidade de numeros que será recebida pelo código
  let numeros = [];
  while (controlador > 0) {
    let numeroAtual = readlineSync.questionInt(`Informe o numero: `);
    numeros.push(numeroAtual);
    controlador--;
  }
  return numeros;
}

function main() {
  let listaDeNumeros = interaction();
  let listaOrdenada = ordenaListaDeNumeros(listaDeNumeros);
  console.log(`\nO maior número é: ${listaOrdenada[listaOrdenada.length -1]} \nO menor número é: ${listaOrdenada[0]}`)
}

main();
