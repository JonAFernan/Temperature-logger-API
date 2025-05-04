import '../config/env.js';
export const users = [
    {
        name: process.env.SUPER_USER,
        role: 'admin',
        password: process.env.SUPER_PASSWORD,
    },
    {
        name: process.env.BASIC_USER,
        role: 'basic',
        password: process.env.BASIC_PASSWORD,
    },
];
