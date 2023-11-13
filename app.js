const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Define las rutas a los directorios
const viewsPath = path.join(__dirname, 'views');
const publicPath = path.join(__dirname, 'public');

// Configura Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(viewsPath, 'home.html'));
});

app.listen(port, () => {
    console.log("El servidor está funcionando");
});
