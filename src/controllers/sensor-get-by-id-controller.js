import pool from '../index.js';

const getSensorByIdController = async (req, res) => {
    const query = `
    SELECT s.*, r.temperature, r.date
    FROM sensors s 
    LEFT JOIN (
        SELECT sensor_id, temperature, date
        FROM records r1
        WHERE record_id = (
            SELECT MAX(record_id) FROM records r2 WHERE r1.sensor_id = r2.sensor_id
        )
    ) r ON s.sensor_id = r.sensor_id
    WHERE s.sensor_id = ?;
`;

    const sensor_id = req.params;

    try {
        const [result] = await pool.query(query, [sensor_id.id]);
        if (result.length === 0) {
            return res
                .status(404)
                .json({ message: `Sensor with ID:${sensor_id} not found` });
        }

        res.json(result[0]);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default getSensorByIdController;
