const itemModel = require('../models/item.model');  // Importa o modelo de itens

// Controlador para a rota GET, que retorna todos os itens
async function getItems(req, res) {
  const items = await itemModel.listItems();  // Obtém todos os itens diretamente do modelo
  res.status(200).json(items);  // Retorna os itens no formato JSON
};

// Controlador para a rota POST, que cria um novo item
async function createItem(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }



  const newItem = await itemModel.createItem(name);

  if (newItem) {
    res.status(201).json({ message: "Item criado com sucesso" });
  } else {
    res.status(500).json({ message: "Erro ao criar item"});
  }
}


module.exports = {
  getItems,
  createItem,
}
