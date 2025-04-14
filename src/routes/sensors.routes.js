import { Router } from 'express';

const sensorRouter = Router();

sensorRouter.get('/sensors/:id');
sensorRouter.get('/sensors');
sensorRouter.post('/sensors');
sensorRouter.patch('/sensors/:id');
sensorRouter.delete('/sensors/:id');

export default sensorRouter;
