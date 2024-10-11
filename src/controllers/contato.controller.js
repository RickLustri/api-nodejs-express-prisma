const contatoModel = require('../models/contato.model');


async function receberContatos(req, res) {
  const contatos = await contatoModel.listarContatos();
  res.status(200).json(contatos);
}


async function criarContato(req, res) { 
  const { nome, telefone} = req.body;

  if (!nome) {
    return res.status(400).json({ message: 'Nome é obrigatório' });
  }

  if (!telefone) {
    return res.status(400).json({ message: 'Contato é obrigatório' });
  }

  const novoContato = await contatoModel.criarContato(nome, telefone);
  
  if (novoContato) {
    res.status(201).json({ message: "Contato criado com sucesso" });
  } else {
    res.status(500).json({ message: "Erro ao criar contato" });
  }
}


module.exports = {
  receberContatos,
  criarContato
}