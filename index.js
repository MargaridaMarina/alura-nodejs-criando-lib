const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro){
  throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'))
}


async function pegaArquivo(caminhoDoArquivo){
  try {
    const encoding = 'utf-8'
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.green(texto))
  } catch(erro) {
    trataErro(erro)
  }
}

pegaArquivo('./arquivos/')