import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
import {
    addressPattern,
    addressSchema,
    temperatureSchema,
    timeStampSchema,
    arraySchema,
} from './dto-types.js';

const addDTOSchema = arraySchema(
    Type.Object(
        {
            address: addressSchema,
            temperature: temperatureSchema,
            date: timeStampSchema,
        },
        {
            additionalProperties: false,
            errorMessage: {
                additionalProperties: 'The object format is not correct',
            },
        },
    ),
);

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');
ajv.addFormat('address', addressPattern);
addErrors(ajv);
addFormats(ajv);

const validateSchema = ajv.compile(addDTOSchema);

const addRecordDTO = (req, res, next) => {
    if (!validateSchema(req.body))
        return res.status(400).send({
            errors: validateSchema.errors.map((error) => error.message),
        });
    next();
};

export default addRecordDTO;
