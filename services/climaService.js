const axios = require('axios');

const MENSAJES = {
    ERROR_API_KEY: 'API key de OpenWeather no configurada.',
    ERROR_DATOS_INCOMPLETOS: 'Datos de clima incompletos.',
    ERROR_CIUDAD_NO_ENCONTRADA: 'Ciudad no encontrada.',
    ERROR_CONEXION: 'No se pudo conectar al servicio de clima.',
    ERROR_GENERAL: 'Error al obtener los datos de clima.'
};

exports.obtenerClima = async (ciudad) => {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) throw new Error(MENSAJES.ERROR_API_KEY);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&units=metric&appid=${apiKey}&lang=es`;

    try {
        const respuesta = await axios.get(url);
        const data = respuesta.data;

        if (!data || !data.main || !data.weather || !data.weather[0]) {
            throw new Error(MENSAJES.ERROR_DATOS_INCOMPLETOS);
        }

        return {
            ciudad: data.name,
            temperatura: data.main.temp,
            descripcion: data.weather[0].description,
            icono: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            humedad: data.main.humidity,
            viento: data.wind?.speed || 0
        };
    } catch (err) {
        if (err.response && err.response.status === 404) {
            throw new Error(MENSAJES.ERROR_CIUDAD_NO_ENCONTRADA);
        } else if (err.code === 'ENOTFOUND' || err.code === 'ECONNABORTED') {
            throw new Error(MENSAJES.ERROR_CONEXION);
        } else {
            throw new Error(err.message || MENSAJES.ERROR_GENERAL);
        }
    }
};
