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

export const matchAddressWhithSensor = async (address) => {
    const query = `SELECT sensor_id FROM sensors WHERE address = ? LIMIT 1`;
    try {
        const [sensor] = await pool.query(query, [address]);
        if (!sensor.length) {
            console.warn(` Warning: No sensor found for address ${address}`);
            return null;
        }
        return sensor[0].sensor_id;
    } catch (error) {
        console.error('Error matching the address with a sensor', error);
        throw new Error('Database error');
    }
};
