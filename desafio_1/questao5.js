function contadorDeString(frase) {
  let listaDePalavras = frase.split(' ');
  return listaDePalavras.length;
}

function main(novaFrase) {
  let numeroDePalavras = contadorDeString(novaFrase);
  let palavraCondicao = (numeroDePalavras === 1 ? 'palavra' : 'palavras');
  console.log(`A frase possui ${numeroDePalavras} ${palavraCondicao}.`);
}

let frase = 'What is Lorem Ipsum?';
main(frase);
