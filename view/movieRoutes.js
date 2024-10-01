const express = require('express');
const { createMovie, getMovies, getMovieById } = require('../controller/movieController');
const router = express.Router();

// Ruta para crear una nueva película
router.post('/create', createMovie);

// Ruta para obtener todas las películas
router.get('/all', getMovies);

// Ruta para obtener una película por ID
router.get('/:id_pelicula', getMovieById);

module.exports = router;
