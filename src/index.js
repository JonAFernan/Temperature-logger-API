import './config/env.js';
import connectDB from './config/db.js';
import httpServer from './config/http.js';

const pool = connectDB(); // Initialize the connection pool to reuse it across the application

const runServer = () => {
    httpServer.listen(process.env.PORT, () => {
        console.log(`Server running in port ${process.env.PORT}`);
    });
};

runServer();

export default pool;
