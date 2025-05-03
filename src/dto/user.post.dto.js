import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
import { userSchema } from './dto-types.js';

const addDTOSchema = Type.Object(
    {
        user: userSchema,
        password: userSchema,
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

const postUserDTO = (req, res, next) => {
    if (!validateSchema(req.body))
        return res.status(400).send({
            errors: validateSchema.errors.map((error) => error.message),
        });
    next();
};

export default postUserDTO;
