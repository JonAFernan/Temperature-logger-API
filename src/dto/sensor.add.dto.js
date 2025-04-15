import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';

const addDTOSchema = Type.Object({
    address: Type.String({
        minLength: 3,
        maxLength: 3,
        format: 'address', // Solo números entre 000 y 255
        errorMessage: {
            type: 'The data type must be a string',
            format: 'The address must be between 000 and 255.',
        },
    }),
    name: Type.String({
        minLength: 2,
        maxLength: 50,
        errorMessage: {
            type: 'The data type must be a string',
            minLength: 'The name must be at least 2 characters long.',
            maxLength: 'The name cannot exceed 50 characters.',
        },
    }),
    alarm_range_min: Type.Number({
        minimum: -100,
        maximum: 100,
        errorMessage: {
            type: 'The data type must be a Number',
            minimum: 'The minimum alarm range must be at least -100.',
            maximum: 'The maximum alarm range cannot exceed 100.',
        },
    }),
    alarm_range_max: Type.Number({
        minimum: -100,
        maximum: 100,
        errorMessage: {
            type: 'The data type must be a Number',
            minimum: 'The minimum alarm range must be at least -100.',
            maximum: 'The maximum alarm range cannot exceed 100.',
        },
    }),
    setpoint: Type.Number({
        minimum: -100,
        maximum: 100,
        errorMessage: {
            type: 'The data type must be a Number',
            minimum: 'The setpoint must be at least -100.',
            maximum: 'The setpoint cannot exceed 100.',
        },
    }),
});

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');
ajv.addFormat('address', /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|0[0-9]{2})$/);
addErrors(ajv);

const validateSchema = ajv.compile(addDTOSchema);

const addSensorDTO = (req, res, next) => {
    if (!validateSchema(req.body))
        return res
            .status(400)
            .send({
                errors: validateSchema.errors.map((error) => error.message),
            });
    next();
};

export default addSensorDTO;
