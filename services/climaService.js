const axios = require('axios');

exports.obtenerClima = async (ciudad) => {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiKey}&lang=es`;

    const respuesta = await axios.get(url);
    const data = respuesta.data;

    return {
        ciudad: data.name,
        temperatura: data.main.temp,
        descripcion: data.weather[0].description,
        icono: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    };
};
