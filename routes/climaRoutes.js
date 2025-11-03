const express = require('express');
const router = express.Router();
const climaController = require('../controllers/climaController');

router.get('/', climaController.getHome);
router.post('/buscar', climaController.buscarCiudad);
router.get('/historial', climaController.verHistorial);

module.exports = router;
