// aqui, colocaremos todas as funções que acessam a conexão com o banco de dados
const connection = require('./connection');

const getAll = async () => {
  // o método espera como parâmetro uma query
  const tasks = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

module.exports = {
  getAll
};