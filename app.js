require('dotenv').config();
const express = require('express');
const path = require('path');

const climaRoutes = require('./routes/climaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

/* ==========================
   Configuración de vistas
========================== */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* ==========================
   Middleware
========================== */
// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
// Parsear datos del body en formularios
app.use(express.urlencoded({ extended: true }));

/* ==========================
   Rutas
========================== */
app.use('/', climaRoutes);

/* ==========================
   Manejo de rutas no encontradas
========================== */
app.use((req, res) => {
    res.status(404).render('404', { mensaje: 'Página no encontrada' });
});

/* ==========================
   Iniciar servidor
========================== */
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
