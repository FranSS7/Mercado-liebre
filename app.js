const express = require('express');
const path = require('path');
const app = express();

// Define las rutas a los directorios
const viewsPath = path.join(__dirname, 'views');
const publicPath = path.join(__dirname, 'public');

// Configura Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(viewsPath, 'home.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(viewsPath, 'registro.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(viewsPath, 'login.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
