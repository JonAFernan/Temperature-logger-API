import express from 'express';
import sensorRouter from '../routes/sensors.routes';

const expressApp = express();

//Middleware
expressApp.use(express.json());

//routes
expressApp.use('/sensors', sensorRouter);

export default expressApp;
