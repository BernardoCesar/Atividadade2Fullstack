const express = require('express');
const mongoose = require('mongoose');
const premioRoute = require ('./routes/premio-route');
const usuarioRoute = require('./routes/usuario-route');
const reciclagemRoute = require('./routes/reciclagem-route');

const url="mongodb+srv://root:root@sensatolindao.kk7fiwe.mongodb.net/cidadeverde?retryWrites=true&w=majority";

const app = express();

// habilita a rota para usuarios
app.use(premioRoute);
app.use(usuarioRoute);
app.use(reciclagemRoute);

app.use((req, res) => {
    res.status(404).json({msg: "Endpoint inexistente!"})
})

mongoose.connect(url).then(() => {
    app.listen(3000, () => console.log('Servidor iniciado...'));
}).catch((err) => console.log(err));
