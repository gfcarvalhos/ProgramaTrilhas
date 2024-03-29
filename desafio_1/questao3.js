//Ordenação de numeros

function algoritmoDeOrdenacao(lista) {
  let listaOrdenada = [];
  let listaCopia = lista.slice();
  for (let i = 0; i < lista.length; i++) {
    let intermediario = listaCopia[0];
    let memoriaIndex = 0;
    for (let j = 0; j < listaCopia.length; j++) {
      if (intermediario > listaCopia[j]) {
        intermediario = listaCopia[j];
        memoriaIndex = j;
      } 
    }
    listaOrdenada.push(intermediario);
    listaCopia.splice(memoriaIndex, 1);
  }
  return listaOrdenada;
}

function main(listaNaoOrdenada) {
  let listaFinal = algoritmoDeOrdenacao(listaNaoOrdenada);
  console.log(listaFinal);
}

let listaNumeros = [12, 5, 23, 17, 8, 14, 3, 19];
main(listaNumeros);
