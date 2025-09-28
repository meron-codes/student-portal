const pool = require('../db');

const Subject = {
    getAll: async () => (await pool.query('SELECT * FROM subjects')).rows,
    getById: async (id) => (await pool.query('SELECT * FROM subjects WHERE subject_id=$1',[id])).rows[0],
    create: async ({ name }) => {
        const result = await pool.query(
            'INSERT INTO subjects (name) VALUES ($1) RETURNING *',
            [name]
        );
        return result.rows[0];
    }
};

module.exports = Subject;
