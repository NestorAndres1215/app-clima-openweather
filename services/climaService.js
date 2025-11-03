const axios = require('axios');

exports.obtenerClima = async (ciudad) => {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiKey}&lang=es`;

    const respuesta = await axios.get(url);
    const data = respuesta.data;
    const axios = require('axios');

    const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const ICON_URL = 'http://openweathermap.org/img/wn';

    exports.obtenerClima = async (ciudad) => {
        if (!ciudad || typeof ciudad !== 'string') {
            throw new Error('Debes proporcionar un nombre de ciudad válido.');
        }

        const url = `${BASE_URL}?q=${encodeURIComponent(ciudad)}&units=metric&appid=${OPENWEATHER_API_KEY}&lang=es`;

        try {
            const { data } = await axios.get(url);

            const { name, main: { temp }, weather } = data;
            const { description, icon } = weather[0];

            return {
                ciudad: name,
                temperatura: temp,
                descripcion: description,
                icono: `${ICON_URL}/${icon}@2x.png`
            };
        } catch (error) {
            if (error.response && error.response.status === 404) {
                throw new Error(`Ciudad "${ciudad}" no encontrada.`);
            }
            throw new Error('Error al obtener el clima. Intenta nuevamente más tarde.');
        }
    };

    return {
        ciudad: data.name,
        temperatura: data.main.temp,
        descripcion: data.weather[0].description,
        icono: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    };
};
