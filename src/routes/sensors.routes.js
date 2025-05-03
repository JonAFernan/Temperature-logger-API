import { Router } from 'express';
import addSensorDTO from '../dto/sensor.add.dto.js';
import updateSensorDTO from '../dto/sensor.update.dto.js';
import idSensorDTO from '../dto/sensor.delete.dto.js';
import addSensorController from '../controllers/sensor-add-controller.js';
import getAllSensorsControllers from '../controllers/sensor-get-all-controller.js';
import updateSensorController from '../controllers/sensor-update-controller.js';
import deleteSensorController from '../controllers/sensor-delete-controller.js';
import getSensorByIdControllers from '../controllers/sensor-get-by-id-controller.js';
import idSensorGetDTO from '../dto/sensor.get.dto.js';
import userJWTDto from '../dto/user-jwt.dto.js';

const sensorRouter = Router();

sensorRouter.get('/all', getAllSensorsControllers);
sensorRouter.get('/:id', idSensorGetDTO, getSensorByIdControllers);
sensorRouter.post('/add', addSensorDTO, userJWTDto, addSensorController);
sensorRouter.put('/:id', updateSensorDTO, userJWTDto, updateSensorController);
sensorRouter.delete('/:id', idSensorDTO, userJWTDto, deleteSensorController);

export default sensorRouter;
