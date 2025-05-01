import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import { idSchema } from './dto-types.js';

const addDTOSchema = idSchema;

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier');

addErrors(ajv);

const validateSchema = ajv.compile(addDTOSchema);

const idSensorGetDTO = (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    if (!validateSchema(id))
        return res.status(400).send({
            errors: validateSchema.errors.map((error) => error.message),
        });
    next();
};

export default idSensorGetDTO;
