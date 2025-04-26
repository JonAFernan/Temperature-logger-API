import { Router } from 'express';
import addRecordDTO from '../dto/record.add.dto.js';
import addRecordController from '../controllers/record-add-controller.js';

const recordRouter = Router();

recordRouter.post('/add', addRecordDTO, addRecordController);

export default recordRouter;
