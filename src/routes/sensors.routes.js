import { Router } from 'express';
import addSensorDTO from '../dto/sensor.add.dto.js';

const sensorRouter = Router();

sensorRouter.get('/:id', (req, res) =>
    res.json({ message: 'Handler pendiente' }),
);
sensorRouter.get('/all', (req, res) =>
    res.json({ message: 'Handler pendiente' }),
);
sensorRouter.post('/add', addSensorDTO, (req, res) => res.send());
sensorRouter.patch('/:id', (req, res) =>
    res.json({ message: 'Handler pendiente' }),
);
sensorRouter.delete('/:id', (req, res) =>
    res.json({ message: 'Handler pendiente' }),
);

export default sensorRouter;
