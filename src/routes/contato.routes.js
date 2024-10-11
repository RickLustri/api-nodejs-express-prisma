const express = require('express');
const router = express.Router();

const contatoController = require('../controllers/contato.controller');

router.get('/', contatoController.receberContatos);
router.post('/', contatoController.criarContato);

module.exports = router;