/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

const vqv = (nome, idade) => {
  if (!nome || !idade) {
    return undefined;
  }
  const parte1 = 'Oi, meu nome é';
  const parte2 = 'trabalho na Trybe e mando muito em programação!';
  return `${parte1} ${nome}!\nTenho ${idade} anos,\n${parte2}\n#VQV!`;
};
// console.log(vqv('Jeferson', 27));
module.exports = vqv;
