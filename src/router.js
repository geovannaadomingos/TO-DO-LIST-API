const express = require('express');
const router = express.Router();
const tasksController = require('./controllers/tasksController');

// criando a rota raiz
router.get('/tasks', tasksController.getAll);

module.exports = router;