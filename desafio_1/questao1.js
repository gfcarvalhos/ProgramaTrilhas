//Questão 1: Média de notas
import readlineSync from 'readline-sync';

//Calcula media da nota
function calculaMedia(notas){
  let soma = notas.reduce((soma, nota) => soma+nota)
  let media = soma / notas.length
  return media.toFixed(2);
}


//Função de interação no console e validação de nota
function interaction(){
  const qtdDeAvalicacoes = 3; //Informa a quantidade de avaliações
  let notas = []
  let controlador = 1;
  while (qtdDeAvalicacoes>= controlador){
    let notaAtual = readlineSync.questionFloat(`Informe a nota ${controlador}: `)
    //Valida a nota
    if(notaAtual>=0 && notaAtual<=10){
      notas.push(notaAtual);
      controlador++
    } else {
      console.log('Nota inválida.')
    }
  }
  return notas;
}

//Controller das funções
function main(){
  const listaDeNotas = interaction()
  let media = calculaMedia(listaDeNotas);
  console.log(`A média do aluno é: ${media}`);
}

main()