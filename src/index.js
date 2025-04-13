import httpServer from './config/http';
import './config/env.js';

const runServer = () => {
    httpServer.listen(process.env.PORT, () => {
        console.log(`Server running in port ${process.env.PORT}`);
    });
};

runServer();
