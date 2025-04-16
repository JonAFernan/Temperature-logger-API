import pool from '../index.js';
import checkSensorExists from './auxiliary-functions.js';

const deleteSensorController = async (req, res) => {
    const queryUpdate = ` DELETE FROM Sensors WHERE sensor_id = ?;`;
    const { sensor_id } = req.body;

    try {
        const checkId = await checkSensorExists(sensor_id);
        if (!checkId)
            return res
                .status(404)
                .json({ message: `Sensor with ID:${sensor_id} not found` });

        await pool.query(queryUpdate, [sensor_id]);

        return res.status(200).json({ message: 'Sensor deleted successfully' });
    } catch (error) {
        console.error('Error deleting sensor:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default deleteSensorController;
