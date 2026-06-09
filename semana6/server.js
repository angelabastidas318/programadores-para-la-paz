const express = require('express');
const app = express();

app.use(express.json());

app.post('/registro', (req, res) => {
res.json({
mensaje: 'Registro recibido',
datos: req.body
});
});

app.post('/incidencia', (req, res) => {
res.json({
mensaje: 'Incidencia registrada',
incidencia: req.body
});
});

app.listen(3000, () => {
console.log('Servidor ejecutándose en puerto 3000');
});
