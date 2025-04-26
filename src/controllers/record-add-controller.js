import pool from '../index.js';
import { matchAddressWhithSensor } from '../controllers/auxiliary-functions.js';

const addRecordController = async (req, res) => {
    const query = `INSERT INTO records (sensor_id, temperature, timestamp) VALUES (?, ?, ?);`;

    const records = req.body;

    try {
        for (const record of records) {
            const sensor_id = await matchAddressWhithSensor(record.address);
            if (sensor_id) {
                await pool.query(query, [
                    sensor_id,
                    record.temperature,
                    record.date,
                ]);
            } else
                console.warn(
                    `Warning: No sensor found for address ${record.address}`,
                );
        }

        return res
            .status(201)
            .json({ message: 'record registered successfully' });
    } catch (error) {
        console.error('Error registering the record:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default addRecordController;
