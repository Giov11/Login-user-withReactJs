// database.js (backend)

const { Pool } = require('pg');
//Creamos un objeto que tenga los datos de la base de datos nuestra, en este caso se utilizará PostgreSQL
const pool = new Pool({
  user: '',
  host: '',
  database: '',
  password: '',
  port: 5432, //Este es el puerto por defecto que usa postgresql
});

//Creamos funcion para obtener los usuarios
const obtenerUsuarios = async () => {
  try {
    const result = await pool.query(''); //La query es la consulta que haremos para traer los usuarios, por ejemplo: 'select * from usuarios'
    return  console.log(result)
    result.rows
  } catch (error) {
    throw new Error('Error al obtener usuarios desde la base de datos');
    
  }
};

module.exports = { obtenerUsuarios };
