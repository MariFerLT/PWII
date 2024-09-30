const { createMovie, getMovies, getMovieById } = require('../model/MovieModel');

// Crear una película
exports.createMovie = async (req, res) => {
    const { id_user, nombre, descripcion, calificacion, miniatura, id_categoria } = req.body;
  
    try {
      await createMovie(id_user, nombre, descripcion, calificacion, miniatura, id_categoria);
      res.status(201).json({ message: 'Película creada con éxito' }); // Solo devuelve el mensaje
    } catch (error) {
      console.error('Error al crear la película:', error);
      res.status(500).json({ message: 'Hubo un error al crear la película', error: error.message });
    }
  };

// Obtener todas las películas
exports.getMovies = async (req, res) => {
  try {
    const movies = await getMovies();
    res.json(movies);
  } catch (error) {
    console.error('Error al obtener las películas:', error);
    res.status(500).json({ message: 'Error al obtener las películas', error: error.message });
  }
};

// Obtener una película por ID
exports.getMovieById = async (req, res) => {
  const { id_pelicula } = req.params;

  try {
    const movie = await getMovieById(parseInt(id_pelicula));
    if (!movie) {
      return res.status(404).json({ message: 'Película no encontrada' });
    }
    res.json(movie);
  } catch (error) {
    console.error('Error al obtener la película:', error);
    res.status(500).json({ message: 'Error al obtener la película', error: error.message });
  }
};
