const express = require('express');  // Importa o Express
const router = express.Router();     // Cria uma instância de roteamento do Express
const itemController = require('../controllers/item.controller');  // Importa o controlador para itens

// Define a rota GET para buscar todos os itens
router.get('/', itemController.getItems);

// Define a rota POST para criar um novo item
router.post('/', itemController.createItem);

module.exports = router;  // Exporta as rotas para serem usadas em outros arquivos
