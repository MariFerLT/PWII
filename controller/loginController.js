
const { createUser, findUserByEmail, findUserByName } = require('../model/UserModel');

// Registro de usuario
exports.register = async (req, res) => {
    const { nombre_usuario, correo, clave, fecha_nacimiento } = req.body;

    try {
        // Verificar si el usuario ya existe
        const existingUser = await findUserByName(nombre_usuario);
        if (existingUser) {
            return res.status(400).json({ message: 'Oh no, parece que alguien ya tiene ese nombre. ¡Pero seguro tú puedes pensar en algo aún más brillante!' });
        }
        const existingEmail = await findUserByEmail(correo);
        if (existingEmail) {
            return res.status(400).json({ message: 'Este correo electrónico ya está registrado.' });
        }
        

        // Crear nuevo usuario
        const user = await createUser(nombre_usuario, correo, clave, fecha_nacimiento);

        res.status(201).json({ message: '¡Luces, cámara, acción! Te has registrado con éxito.', user });
    } catch (error) {
        //res.status(500).json({ message: 'Parece que hubo un problema con los datos ingresados. Te pedimos que verifiques la información y vuelvas a intentarlo.', error });
        console.error('Error en el registro de usuario:', error); // Detalles del error
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};


// Inicio de sesión
exports.login = async (req, res) => {
    const { correo, clave } = req.body;

    try {
        // Verificar si el usuario existe y si la contraseña es correcta
        const user = await findUserByEmail(correo);
        if (!user || user.clave !== clave) {
            return res.status(400).json({ message: 'Los datos no coinciden' });
        }

        res.json({ message: 'Inicio de sesión exitoso. ¡Bienvenido!'});
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesion. ', error });
    }
};
