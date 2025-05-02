import { Type } from '@sinclair/typebox';

export const idSchema = Type.Integer({
    minimum: 0,
    errorMessage: {
        type: 'The data type must be a Integer',
        minimum: 'The minimum id is 0.',
    },
});

export const addressSchema = Type.String({
    minLength: 3,
    maxLength: 3,
    format: 'address',
    errorMessage: {
        type: 'The address data type must be a string',
        format: 'The address must be between 000 and 255.',
    },
});

export const nameSchema = Type.String({
    minLength: 2,
    maxLength: 50,
    errorMessage: {
        type: 'The name data type must be a string',
        minLength: 'The name must be at least 2 characters long.',
        maxLength: 'The name cannot exceed 50 characters.',
    },
});

export const alarmRangeMinSchema = Type.Number({
    minimum: -100,
    maximum: 100,
    errorMessage: {
        type: 'The alarm range min data type must be a Number',
        minimum: 'The minimum alarm range must be at least -100.',
        maximum: 'The maximum alarm range cannot exceed 100.',
    },
});
export const alarmRangeMaxSchema = Type.Number({
    minimum: -100,
    maximum: 100,
    errorMessage: {
        type: 'The alarm range max data type must be a Number',
        minimum: 'The minimum alarm range must be at least -100.',
        maximum: 'The maximum alarm range cannot exceed 100.',
    },
});

export const setpointSchema = Type.Number({
    minimum: -100,
    maximum: 100,
    errorMessage: {
        type: 'The setpoint data type must be a Number',
        minimum: 'The setpoint must be at least -100.',
        maximum: 'The setpoint cannot exceed 100.',
    },
});

export const temperatureSchema = Type.Number({
    minimum: -100,
    maximum: 100,
    errorMessage: {
        type: 'The temperature data type must be a Number',
        minimum: 'The temperature must be at least -100.',
        maximum: 'The temperature cannot exceed 100.',
    },
});

export const timeStampSchema = Type.String({
    format: 'date-time',
    errorMessage: {
        type: 'The date time data type must be a String',
        format: 'The date must be in iso format without the Z',
    },
});

export const arraySchema = (objectSchema) =>
    Type.Array(objectSchema, {
        minItems: 1,
        errorMessage: {
            type: 'The data type must be an array of objects',
            minItems: 'At least one record is required',
        },
    });

export const addressPattern = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|0[0-9]{2})$/;
