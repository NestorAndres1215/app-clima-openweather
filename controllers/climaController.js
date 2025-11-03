const climaService = require('../services/climaService');

const MENSAJES = {
    ERROR_CIUDAD_VACIA: 'Por favor, ingresa una ciudad.',
    ERROR_NO_ENCONTRADA: 'Ciudad no encontrada.'
};

let historialCiudades = [];

const getHome = (req, res) => {
    res.render('index', { clima: null, error: null });
};

const buscarCiudad = async (req, res) => {
    const ciudad = req.body.ciudad?.trim();

    if (!ciudad) {
        return res.render('index', { clima: null, error: MENSAJES.ERROR_CIUDAD_VACIA });
    }

    try {
        const clima = await climaService.obtenerClima(ciudad);

        // Guardar en historial si no está repetida
        if (!historialCiudades.includes(clima.ciudad)) {
            historialCiudades = [...historialCiudades, clima.ciudad];
        }

        res.render('index', { clima, error: null });
    } catch (err) {
        res.render('index', { clima: null, error: err.message || MENSAJES.ERROR_NO_ENCONTRADA });
    }
};

const verHistorial = (req, res) => {
    res.render('historial', { ciudades: historialCiudades });
};

module.exports = {
    getHome,
    buscarCiudad,
    verHistorial
};
