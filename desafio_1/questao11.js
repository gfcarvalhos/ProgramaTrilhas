//Idade

//Transforma a string recebida em formato Date e calcula a idade considerando data atual
function calculaIdade(data) {
  let partesDaData = data.split('-');
  let dataNascimento = new Date(
    partesDaData[0],
    partesDaData[1] - 1,
    partesDaData[2],
  );
  let dataAtual = new Date();
  let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
  let mesAtual = dataAtual.getMonth();
  let mesNascimento = dataNascimento.getMonth();
  if (
    mesAtual < mesNascimento ||
    (mesAtual == mesNascimento &&
      dataAtual.getDate() < dataNascimento.getDate())
  ) {
    idade--;
  }
  return idade;
}

function main(data) {
  let idade = calculaIdade(data);
  console.log(idade + ' anos');
}

let data = '2000-10-11'; //Data de nascimento
main(data);
