import './config/env.js';
import connectDB from './config/db.js';
import httpServer from './config/http.js';

const runServer = async () => {
    await connectDB();
    httpServer.listen(process.env.PORT, () => {
        console.log(`Server running in port ${process.env.PORT}`);
    });
};

runServer();
