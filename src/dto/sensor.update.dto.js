import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import {
    addressPattern,
    addressSchema,
    alarmRangeMaxSchema,
    alarmRangeMinSchema,
    idSchema,
    nameSchema,
    setpointSchema,
} from './dto-types.js';

const addDTOSchema = Type.Object({
    id: idSchema,
    address: addressSchema,
    name: nameSchema,
    alarm_range_min: alarmRangeMinSchema,
    alarm_range_max: alarmRangeMaxSchema,
    setpoint: setpointSchema,
});

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');
ajv.addFormat('address', addressPattern);
addErrors(ajv);

const validateSchema = ajv.compile(addDTOSchema);

const updateSensorDTO = (req, res, next) => {
    if (!validateSchema(req.body))
        return res.status(400).send({
            errors: validateSchema.errors.map((error) => error.message),
        });
    next();
};

export default updateSensorDTO;
