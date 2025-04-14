import express from 'express';
import sensorRouter from '../routes/sensors.routes.js';
//import pool from '../index.js'; Prueba de conexiones y consulta a la base de datos

const expressApp = express();

//Middleware
expressApp.use(express.json());

//routes

/*
//Prueba de conexiones y consulta a la base de datos
expressApp.get('/', async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM Sensors'); // Usamos el pool directamente
        res.json(result);
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});*/

expressApp.use('/', sensorRouter);

export default expressApp;
