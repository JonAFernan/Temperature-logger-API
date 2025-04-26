import pool from '../index.js';

const getAllSensorsController = async (req, res) => {
    const query = `
        SELECT s.*, r.temperature, r.alarm
        FROM sensors s
        LEFT JOIN (
            SELECT sensor_id, temperature, alarm
            FROM records r1
            WHERE record_id = (
                SELECT MAX(record_id) FROM records r2 WHERE r1.sensor_id = r2.sensor_id
            )
        ) r ON s.sensor_id = r.sensor_id;`;

    try {
        const [result] = await pool.query(query);
        res.json(result);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default getAllSensorsController;
