const express = require("express"); // Importa o Express
const app = express(); // Cria uma instância do Express
require("dotenv").config();
const itemRoutes = require("./routes/item.routes"); // Importa as rotas definidas para itens
const contatoRoutes = require("./routes/contato.routes"); // Importa as rotas definidas para contatos

app.use(express.json()); // Middleware para permitir o uso de JSON nas requisições

// Define as rotas da aplicação, utilizando '/api/items' como base para todas as rotas de itens
app.use("/api/items", itemRoutes);
app.use("/api/contatos", contatoRoutes);

// Porta do servidor, pode ser definida pela variável de ambiente ou padrão 3000
const PORT = process.env.PORT || 3000;

// Inicia o servidor e exibe uma mensagem no console indicando a porta em uso
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
