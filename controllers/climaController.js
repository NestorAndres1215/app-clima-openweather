const climaService = require('../services/climaService');

let historialCiudades = [];

exports.getHome = (req, res) => {
    res.render('index', { clima: null, error: null });
};

exports.buscarCiudad = async (req, res) => {
    const ciudad = req.body.ciudad;
    try {
        const clima = await climaService.obtenerClima(ciudad);

        // Guardar en historial si no está repetida
        if (!historialCiudades.includes(clima.ciudad)) {
            historialCiudades.push(clima.ciudad);
        }

        res.render('index', { clima, error: null });
    } catch (err) {
        res.render('index', { clima: null, error: 'Ciudad no encontrada' });
    }
};

exports.verHistorial = (req, res) => {
    res.render('historial', { ciudades: historialCiudades });
};
