const express = require('express');
const router = express.Router();
const path = require('path');

// Ruta 1: Login (Página principal)
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

// Ruta 2: Tomar Pedido
router.get('/tomar-pedido', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/tomarPedido.html'));
});

// Ruta 3: Resumen de Pedido
router.get('/resumen-pedido', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/resumenPedido.html'));
});

module.exports = router;