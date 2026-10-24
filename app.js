const express = require('express');
const app = express();
const PORT = 3000;

// Importar las rutas
const indexRoutes = require('./routes/indexRoutes');

// Usar las rutas
app.use('/', indexRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});