import pool from '../index.js';

const addRecordController = async (req, res) => {
    const query = `INSERT INTO temperature_records (address, temperature, timestamp) VALUES (?, ?, ?);`;

    const records = req.body;

    try {
        for (const record of records) {
            await pool.query(query, [
                record.address,
                record.temperature,
                record.date,
            ]);
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
