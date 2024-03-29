//Pontos de HP

function calculaHPFinal(qtdDeAtaquesSofridos) {
  let vidaCheia = 100;
  return vidaCheia - qtdDeAtaquesSofridos * 20;
}

function main(ataques) {
  let hpFinal = calculaHPFinal(ataques);
  let ataquesMensagem = ataques == 1 ? 'ataque' : 'ataques';
  console.log(
    `Personagem sofreu ${ataques} ${ataquesMensagem} e agora tem ${hpFinal} de HP.`,
  );
}

let ataque = 3; //Quantidade de ataques sofridos
main(ataque);
