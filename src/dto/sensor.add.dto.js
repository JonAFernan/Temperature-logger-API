import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import {
    addressSchema,
    alarmRangeMaxSchema,
    alarmRangeMinSchema,
    nameSchema,
    setpointSchema,
} from './dto-types.js';

const addDTOSchema = Type.Object({
    address: addressSchema,
    name: nameSchema,
    alarm_range_min: alarmRangeMinSchema,
    alarm_range_max: alarmRangeMaxSchema,
    setpoint: setpointSchema,
});

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');
ajv.addFormat('address', /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|0[0-9]{2})$/);
addErrors(ajv);

const validateSchema = ajv.compile(addDTOSchema);

const addSensorDTO = (req, res, next) => {
    if (!validateSchema(req.body))
        return res.status(400).send({
            errors: validateSchema.errors.map((error) => error.message),
        });
    next();
};

export default addSensorDTO;
