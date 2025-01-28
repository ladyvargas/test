const express = require('express');
const cors = require('cors');
const scoreRoutes = require('./routes/scoreRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', scoreRoutes);

// Middleware de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}

module.exports = app;