const express = require('express');
const app = express();

// Ruta para obtener datos de usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener usuarios', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// El servidor incia en el puerto 3000 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});