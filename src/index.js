import './config/env.js';
import httpServer from './config/http.js';

const runServer = () => {
    httpServer.listen(process.env.PORT, () => {
        console.log(`Server running in port ${process.env.PORT}`);
    });
};

runServer();
