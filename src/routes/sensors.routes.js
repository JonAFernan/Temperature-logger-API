import { Router } from 'express';

const sensorRouter = Router();

sensorRouter.get('/sensors/:id', (req, res) =>
    res.json({ message: 'Handler pendiente' }),
);
sensorRouter.get('/sensors', (req, res) =>
    res.json({ message: 'Handler pendiente' }),
);
sensorRouter.post('/sensors', (req, res) =>
    res.json({ message: 'Handler pendiente' }),
);
sensorRouter.patch('/sensors/:id', (req, res) =>
    res.json({ message: 'Handler pendiente' }),
);
sensorRouter.delete('/sensors/:id', (req, res) =>
    res.json({ message: 'Handler pendiente' }),
);

export default sensorRouter;
