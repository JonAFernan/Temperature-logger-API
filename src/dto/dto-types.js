import { Type } from '@sinclair/typebox';

export const idSchema = Type.Number({
    errorMessage: {
        type: 'The data type must be a Number',
    },
});

export const addressSchema = Type.String({
    minLength: 3,
    maxLength: 3,
    format: 'address', // Solo números entre 000 y 255
    errorMessage: {
        type: 'The data type must be a string',
        format: 'The address must be between 000 and 255.',
    },
});

export const nameSchema = Type.String({
    minLength: 2,
    maxLength: 50,
    errorMessage: {
        type: 'The data type must be a string',
        minLength: 'The name must be at least 2 characters long.',
        maxLength: 'The name cannot exceed 50 characters.',
    },
});

export const alarmRangeMinSchema = Type.Number({
    minimum: -100,
    maximum: 100,
    errorMessage: {
        type: 'The data type must be a Number',
        minimum: 'The minimum alarm range must be at least -100.',
        maximum: 'The maximum alarm range cannot exceed 100.',
    },
});
export const alarmRangeMaxSchema = Type.Number({
    minimum: -100,
    maximum: 100,
    errorMessage: {
        type: 'The data type must be a Number',
        minimum: 'The minimum alarm range must be at least -100.',
        maximum: 'The maximum alarm range cannot exceed 100.',
    },
});

export const setpointSchema = Type.Number({
    minimum: -100,
    maximum: 100,
    errorMessage: {
        type: 'The data type must be a Number',
        minimum: 'The setpoint must be at least -100.',
        maximum: 'The setpoint cannot exceed 100.',
    },
});

export const addressPattern = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|0[0-9]{2})$/;
