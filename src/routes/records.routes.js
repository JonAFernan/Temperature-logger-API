import { Router } from 'express';
import addRecordDTO from '../dto/record.add.dto.js';
import addRecordController from '../controllers/record-add-controller.js';
import getRecordDTO from '../dto/record.get.dto.js';
import getRecordController from '../controllers/record-get-controller.js';

const recordRouter = Router();

recordRouter.post('/add', addRecordDTO, addRecordController);
recordRouter.get('/find', getRecordDTO, getRecordController);

export default recordRouter;
