import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import { idSchema } from './dto-types.js';

const addDTOSchema = Type.Object(
    { sensor_id: idSchema },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'The object format is not correct',
        },
    },
);

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');

addErrors(ajv);

const validateSchema = ajv.compile(addDTOSchema);

const idSensorDTO = (req, res, next) => {
    if (!validateSchema(req.body))
        return res.status(400).send({
            errors: validateSchema.errors.map((error) => error.message),
        });
    next();
};

export default idSensorDTO;
