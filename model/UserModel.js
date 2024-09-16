const prisma = require('../prismaConfig'); // Cliente Prisma

// Registro de usuario normal
exports.createUser = async (nombre_usuario, correo, clave, fecha_nacimiento) => {
  return await prisma.usuario.create({
    data: {
      nombre_usuario,
      correo,
      clave,
      rol: 2,
      fecha_nacimiento: new Date(fecha_nacimiento)
    },
  });
};

// Buscar usuario por email
exports.findUserByEmail = async (correo) => {
  return await prisma.usuario.findUnique({
    where: { correo },
  });
};

// Buscar usuario por nombre
exports.findUserByName = async (nombre_usuario) => {
  return await prisma.usuario.findUnique({
    where: { nombre_usuario },
  });
};



