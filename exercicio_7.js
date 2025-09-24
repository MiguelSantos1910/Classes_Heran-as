// Dependências
const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Config. Servidor
const app = express();
const porta = 3000;
app.use(cors());
app.use(express.json());

// Banco de dados (local)
let clientes = [];
let jogos = [];

// Rotas
app.get('/', async (req, res) => {
    res.send('Seja bem-vindo!');
});

// Mostrar clientes
app.get('/mostrar_clientes', async (req, res) => {
    res.send(clientes);
});

// Cadastrar cliente
app.post('/cadastro_cliente', async (req, res) => {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
        return res.status(400).json({ erro: "Por favor insira nome, email e senha." });
    }
    const novo_cliente = { id: clientes.length + 1, nome, email, senha };
    clientes.push(novo_cliente);
    res.status(201).json(novo_cliente);
});

// Mostrar jogos
app.get('/mostrar_jogos', async (req, res) => {
    res.send(jogos);
});

// Cadastrar jogo
app.post('/cadastro_jogos', async (req, res) => {
    const { nome_jogo, genero, plataforma } = req.body;
    if (!nome_jogo || !genero || !plataforma) {
        return res.status(400).json({ erro: "Por favor insira nome do jogo, gênero e plataforma." });
    }
    const novo_jogo = { id_jogo: jogos.length + 1, nome_jogo, genero, plataforma };
    jogos.push(novo_jogo);
    res.status(201).json(novo_jogo);
});

// Deletar cliente
app.delete('/deletar_cliente/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const index = clientes.findIndex(c => c.id === id);

    if (index === -1) {
        return res.status(404).json({ erro: 'Cliente não encontrado!' });
    }

    const remove_cliente = clientes.splice(index, 1);
    res.json({ message: 'Cliente removido com sucesso!', cliente: remove_cliente[0] });
});

// Deletar jogo
app.delete('/deletar_jogos/:id_jogo', async (req, res) => {
    const id_jogo = parseInt(req.params.id_jogo);
    const index_jogo = jogos.findIndex(x => x.id_jogo === id_jogo);

    if (index_jogo === -1) {
        return res.status(404).json({ erro: 'Jogo não encontrado!' });
    }

    const remove_jogo = jogos.splice(index_jogo, 1);
    res.json({ message: 'Jogo removido com sucesso!', jogo: remove_jogo[0] });
});

// Iniciar servidor
app.listen(porta, () => {
    console.log(`Servidor funcionando na porta ${porta}`);
});
