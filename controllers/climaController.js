const climaService = require('../services/climaService');

const MENSAJES = {
    ERROR_CIUDAD_VACIA: 'Por favor, ingresa una ciudad.',
    ERROR_CIUDAD_INVALIDA: 'La ciudad solo puede contener letras y espacios, y debe tener entre 2 y 50 caracteres.',
    ERROR_NO_ENCONTRADA: 'Ciudad no encontrada.',
    ERROR_INTERNO: 'Ocurrió un error al consultar el clima, intenta nuevamente más tarde.'
};

let historialCiudades = [];

const getHome = (req, res) => {
    res.render('index', { clima: null, error: null });
};

const buscarCiudad = async (req, res) => {
    const ciudad = req.body.ciudad?.trim();

    // ==========================
    // Validaciones
    // ==========================
    if (!ciudad) {
        return res.render('index', { clima: null, error: MENSAJES.ERROR_CIUDAD_VACIA });
    }

    if (!/^[a-zA-ZÀ-ÿ\s]{2,50}$/.test(ciudad)) {
        return res.render('index', { clima: null, error: MENSAJES.ERROR_CIUDAD_INVALIDA });
    }

    try {
        const clima = await climaService.obtenerClima(ciudad);

        // ==========================
        // Guardar en historial (sin duplicados, insensible a mayúsculas)
        // ==========================
        const ciudadNormalized = clima.ciudad.toLowerCase();
        if (!historialCiudades.some(c => c.toLowerCase() === ciudadNormalized)) {
            historialCiudades.push(clima.ciudad);
        }

        res.render('index', { clima, error: null });
    } catch (err) {
        console.error(err); // Para debugging
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
