require('dotenv').config();
const express = require('express');
const path = require('path');

const climaRoutes = require('./routes/climaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

/* ==========================
   Constantes de mensajes
========================== */
const MENSAJES = {
  NOT_FOUND: 'Página no encontrada',
  INTERNAL_ERROR: 'Ocurrió un error interno, por favor intenta más tarde',
};

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
   Manejo de rutas no encontradas (404)
========================== */
app.use((req, res, next) => {
  res.status(404).render('404', { mensaje: MENSAJES.NOT_FOUND });
});

/* ==========================
   Middleware de manejo de errores (500)
========================== */
app.use((err, req, res, next) => {
  console.error(err.stack); // Para debug en consola
  res.status(500).render('500', { mensaje: MENSAJES.INTERNAL_ERROR });
});

/* ==========================
   Iniciar servidor
========================== */
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
