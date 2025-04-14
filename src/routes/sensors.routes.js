import { Router } from 'express';

const sensorRouter = Router();

sensorRouter.get('/:id', (req, res) =>
    res.json({ message: 'Handler pendiente' }),
);
sensorRouter.get('/all', (req, res) =>
    res.json({ message: 'Handler pendiente' }),
);
sensorRouter.post('/add', (req, res) =>
    res.json({ message: 'Handler pendiente' }),
);
sensorRouter.patch('/:id', (req, res) =>
    res.json({ message: 'Handler pendiente' }),
);
sensorRouter.delete('/:id', (req, res) =>
    res.json({ message: 'Handler pendiente' }),
);

export default sensorRouter;
