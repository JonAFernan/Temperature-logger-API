import express from 'express';
import sensorRouter from '../routes/sensors.routes.js';
import recordRouter from '../routes/records.routes.js';
import jsonErrorHandler from '../middleware/jsonError.handler.js';
import userRouter from '../routes/user.routes.js';

const expressApp = express();

//Middleware

expressApp.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', [
        'Content-Type',
        'Authorization',
    ]);
    next();
});
expressApp.use(express.json());
expressApp.use(jsonErrorHandler);
//routes

expressApp.use('/sensors', sensorRouter);
expressApp.use('/records', recordRouter);
expressApp.use('/user', userRouter);

export default expressApp;
