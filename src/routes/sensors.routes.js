import { Router } from 'express';
import addSensorDTO from '../dto/sensor.add.dto.js';
import updateSensorDTO from '../dto/sensor.update.dto.js';
import deleteSensorDTO from '../dto/sensor.delete.dto.js';

const sensorRouter = Router();

sensorRouter.get('/:id', (req, res) =>
    res.json({ message: 'Handler pendiente' }),
);
sensorRouter.get('/all', (req, res) =>
    res.json({ message: 'Handler pendiente' }),
);
sensorRouter.post('/add', addSensorDTO, (req, res) => res.send());
sensorRouter.patch('/:id', updateSensorDTO, (req, res) => res.send());
sensorRouter.delete('/:id', deleteSensorDTO, (req, res) => res.send());

export default sensorRouter;
