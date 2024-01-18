const express = require('express');
const router = require('./router');

const app = express();

app.use(router);

//exportando o modulo app para que possa ser usado em outros arquivos
module.exports = app;