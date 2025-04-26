import pool from '../index.js';
import { checkSensorExists } from '../controllers/auxiliary-functions.js';

const getRecordController = async (req, res) => {
    const recordsQuery = `
        SELECT r.temperature, r.date
        FROM records r
        WHERE r.sensor_id = ?
        AND r.date BETWEEN ? AND ?
        ORDER BY r.date ASC;
    `;

    const sensorQuery = `
        SELECT s.setpoint, s.alarm_range_min, s.alarm_range_max
        FROM sensors s
        WHERE s.sensor_id = ?;
    `;

    const { sensor_id, date_from, date_to } = req.body;

    if (new Date(date_from) > new Date(date_to)) {
        return res.status(400).json({
            message: 'date_from must be earlier than date_to',
        });
    }

    try {
        const checkId = await checkSensorExists(sensor_id);
        if (!checkId)
            return res
                .status(404)
                .json({ message: `Sensor with ID:${sensor_id} not found` });

        const [sensorData] = await pool.query(sensorQuery, [sensor_id]);

        const [records] = await pool.query(recordsQuery, [
            sensor_id,
            date_from,
            date_to,
        ]);

        return res.status(200).json({
            sensor: sensorData[0],
            records,
        });
    } catch (error) {
        console.error('Error serching query:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default getRecordController;
