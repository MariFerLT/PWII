const express = require('express');
const { register, login } = require('../controller/loginController');
const router = express.Router();

// Ruta para registro
router.post('/register', register);

// Ruta para inicio de sesión
router.post('/login', login);

module.exports = router;
