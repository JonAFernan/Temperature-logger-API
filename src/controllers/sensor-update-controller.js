import pool from '../index.js';
import checkSensorExists from './auxiliary-functions.js';

const updateSensorController = async (req, res) => {
    const queryUpdate = ` UPDATE Sensors 
            SET address = ?, name = ?, alarm_range_min = ?, alarm_range_max = ?, setpoint = ?
            WHERE sensor_id = ?;
            `;
    const {
        sensor_id,
        address,
        name,
        alarm_range_min,
        alarm_range_max,
        setpoint,
    } = req.body;

    try {
        const checkId = await checkSensorExists(sensor_id);
        if (!checkId)
            return res
                .status(404)
                .json({ message: `Sensor with ID:${sensor_id} not found` });

        await pool.query(queryUpdate, [
            address,
            name,
            alarm_range_min,
            alarm_range_max,
            setpoint,
            sensor_id,
        ]);

        return res.status(201).json({ message: 'Sensor updated successfully' });
    } catch (error) {
        console.error('Error updating sensor:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default updateSensorController;
