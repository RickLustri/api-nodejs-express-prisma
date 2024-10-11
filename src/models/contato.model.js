const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function listarContatos() {
  const buscarContatos = await  prisma.contatos.findMany();
  return buscarContatos;
}

async function criarContato(nome, telefone) {
  const novoContato = await prisma.contatos.create({
    data: {
      nome: nome,
      telefone: telefone
    }
  })

  return novoContato
}

module.exports = {
  listarContatos,
  criarContato
};