//Contador de Uppercase

function contadorDeUpperCase(lista) {
  //let lista = frase.split(' ');
  let contador = 0;
  for (let palavra of lista) {
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] === palavra[i].toUpperCase() && palavra[i] !== palavra[i].toLowerCase()) {
        contador++;
      }
    }
  }
  return contador;
}

function main(frase) {
  console.log(`Quantidade de letras maiúsculas: ${contadorDeUpperCase(frase)}`);
}

let frase =  "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
main(frase);
