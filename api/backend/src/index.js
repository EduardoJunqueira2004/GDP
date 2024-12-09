/*import express from 'express';
import cors from 'cors';

const app = express();
const PORT= 3333;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT} 🔥`);
}); */

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8888;

let clientes = []; 

app.use(cors()); 
app.use(express.json()); 

// Rotas
app.get('/clientes', (req, res) => {
    res.json(clientes); 
});

app.post('/clientes', (req, res) => {
    console.log('Enviado');
    console.log('Headers:', req.headers);
    console.log('Body:', req.body); 

    if (!req.body || Object.keys(req.body).length === 0) {
        res.status(400).json({ error: 'Erro!' });
        return;
    }

    // Adiciona o cliente  à lista de clientes
    clientes.push(req.body);
    res.status(201).json({ message: 'Cliente adicionado com sucesso!', cliente: req.body });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor a rodar na porta ${PORT} 🔥`);
});


