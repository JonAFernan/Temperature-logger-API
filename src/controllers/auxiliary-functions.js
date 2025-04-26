import pool from '../index.js';

export const checkSensorExists = async (sensor_id) => {
    const query = `SELECT * FROM sensors WHERE sensor_id = ?`;
    try {
        const [sensor] = await pool.query(query, [sensor_id]);
        return sensor.length > 0;
    } catch (error) {
        console.error('Error serching sensor by id:', error);
        throw new Error('Database error');
    }
};

export default checkSensorExists;
