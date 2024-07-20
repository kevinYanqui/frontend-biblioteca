const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8081;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Ruta para manejar solicitudes POST
app.post('/api/editores', (req, res) => {
    const editor = req.body;
    console.log('Editor recibido:', editor);
    res.status(201).json({ message: 'Editor guardado exitosamente', editor });
});

// Servir archivos estáticos
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
