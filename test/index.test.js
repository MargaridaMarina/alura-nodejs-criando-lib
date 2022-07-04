const pegaArquivo = require('../index')

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('pegaArquivo::', () => {
  it('deve ser uma funcao', () => {
    expect(typeof pegaArquivo).toBe('function')
  })
  it('deve retornar array com resultados', async () => {
    const resultado = await pegaArquivo('/home/margo/code/alura-nodejs-criando-lib/test/arquivos/texto1.md')
    expect(resultado).toEqual(arrayResult)
  })
})

