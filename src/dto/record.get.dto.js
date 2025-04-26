import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
import { idSchema, timeStampSchema } from './dto-types.js';

const addDTOSchema = Type.Object(
    {
        sensor_id: idSchema,
        date_from: timeStampSchema,
        date_to: timeStampSchema,
    },
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
addFormats(ajv);

const validateSchema = ajv.compile(addDTOSchema);

const getRecordDTO = (req, res, next) => {
    if (!validateSchema(req.body))
        return res.status(400).send({
            errors: validateSchema.errors.map((error) => error.message),
        });
    next();
};

export default getRecordDTO;
