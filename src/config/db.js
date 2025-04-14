import './env.js';
import mysql from 'mysql2/promise';

const connectDB = async () => {
    const connection = await mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
    });

    console.log('MySQL Database Connected Successfully!');
    return connection;
};

export default connectDB;
