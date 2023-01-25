const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
  });
  it('Teste se o retorno da função é um array.', () => {
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('a', 'b'))).toBe(true);
  });
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('a', 'b').length).toBe(2);
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const details = productDetails('a', 'b');
    expect(typeof details[0]).toBe('object');
    expect(typeof details[1]).toBe('object');
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const details = productDetails('a', 'b');
    expect(details[0]).not.toStrictEqual(details[1]);
  });
  it('Teste se os dois productIds terminam com 123.', () => {
    // Teste se os dois productIds terminam com 123.
    const productIds = productDetails('a', 'b');
    const productId1 = productIds[0].details.productId;
    const productId2 = productIds[1].details.productId;
    const string = '123';
    expect(productId1.substring(productId1.length - string.length)).toBe(string);
    expect(productId2.substring(productId2.length - string.length)).toBe(string);
  });
});
