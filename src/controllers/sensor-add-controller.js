import pool from '../index.js';

const addSensorController = async (req, res) => {
    const query = `
            INSERT INTO sensors (address, name, alarm_range_min, alarm_range_max, setpoint)
            VALUES (?, ?, ?, ?, ?);
        `;

    const { address, name, alarm_range_min, alarm_range_max, setpoint } =
        req.body;

    const role = req.role;

    if (role !== 'admin')
        return res.status(401).json({ error: 'No authorized' });

    try {
        await pool.query(query, [
            address,
            name,
            alarm_range_min,
            alarm_range_max,
            setpoint,
        ]);

        return res
            .status(201)
            .json({ message: 'Sensor registered successfully' });
    } catch (error) {
        console.error('Error registering sensor:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default addSensorController;
