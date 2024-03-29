//Valor total de compra
import readlineSync from 'readline-sync';

//Retorna valor total da compra
function calculaValorDeCompra(carrinho) {
  return 2.5 * carrinho[0] + 3.5 * carrinho[1] + 1.99 * carrinho[2];
}

//Gera a quantidade de cada item comprado
function carrinhoDeCompras() {
  console.log(
    'Menu de itens: \n(1) Item 1: R$2,50 \n(2) Item 2: R$3,50 \n(3) Item 3: R$1,99',
  );
  let carrinho = [];
  for (let i = 1; i <= 3; i++) {
    let itemAtual = readlineSync.questionInt(
      `Informe a quantidade de itens ${i} deseja: `,
    );
    carrinho.push(itemAtual);
  }
  return carrinho;
}

function main() {
  let compras = carrinhoDeCompras();
  let totalDaCompra = calculaValorDeCompra(compras);
  console.log(`Valor total a pagar: ${totalDaCompra}`);
}

main();
