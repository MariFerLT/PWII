const express = require('express');
const loginRoutes = require('./loginRoutes');
const app = express();
require('dotenv').config();

// Middleware para procesar JSON
app.use(express.json());

// Rutas de autenticación
app.use('/api/auth', loginRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
