const express = require('express');
const loginRoutes = require('./loginRoutes');
const movieRoutes = require('./movieRoutes');  
const app = express();
require('dotenv').config();

// Middleware para procesar JSON
app.use(express.json());

// Rutas de autenticación
app.use('/api/auth', loginRoutes); 

// Rutas de películas
app.use('/api/movies', movieRoutes);  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

