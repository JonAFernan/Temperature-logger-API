import { Router } from 'express';
import addSensorDTO from '../dto/sensor.add.dto.js';
import updateSensorDTO from '../dto/sensor.update.dto.js';
//import deleteSensorDTO from '../dto/sensor.delete.dto.js';
import addSensorController from '../controllers/sensor-add-controller.js';
import getAllSensorsControllers from '../controllers/sensor-get-all-controller.js';
import updateSensorController from '../controllers/sensor-update-controller.js';

const sensorRouter = Router();

sensorRouter.get('/all', getAllSensorsControllers);
//sensorRouter.get('/:id', getSensorByIdControllers);
sensorRouter.post('/add', addSensorDTO, addSensorController);
sensorRouter.put('/:id', updateSensorDTO, updateSensorController);
//sensorRouter.delete('/:id', deleteSensorDTO, deleteSensorController);

export default sensorRouter;
