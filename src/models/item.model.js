// Importa o Prisma Client para a aplicação
const { PrismaClient } = require('@prisma/client')
// Cria uma instância do Prisma Client
const prisma = new PrismaClient()


// Função que retorna todos os itens armazenados
async function listItems() {
  const buscarItems = await prisma.items.findMany();
  return buscarItems
};


// Função que cria um novo item e o adiciona à lista
async function createItem(name) {
  const newItem = await prisma.items.create({ 
    data: { 
      nome: name
     } 
  });
  return newItem
};

module.exports = {
  listItems,
  createItem,
}
