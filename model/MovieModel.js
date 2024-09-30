const prisma = require('../prismaConfig'); // Asegúrate de tener tu configuración de Prisma

// Crear una nueva película
exports.createMovie = async (id_user, nombre, descripcion, calificacion, miniatura, id_categoria) => {
  return await prisma.pelicula.create({
    data: {
      id_user,
      nombre,
      descripcion,
      calificacion,
      miniatura,
      id_categoria
    }
  });
};

// Obtener todas las películas
exports.getMovies = async () => {
  return await prisma.pelicula.findMany({
    include: {
      usuario: true,  // Incluir la información del usuario que publicó la película
      categoria: true // Incluir la categoría de la película
    }
  });
};

// Obtener una película por ID
exports.getMovieById = async (id_pelicula) => {
  return await prisma.pelicula.findUnique({
    where: { id_pelicula },
    include: {
      usuario: true,
      categoria: true
    }
  });
};
