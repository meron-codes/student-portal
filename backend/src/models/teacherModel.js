const pool = require('../db');

const Teacher = {
    getAll: async () => (await pool.query('SELECT * FROM teachers')).rows,
    getById: async (id) => (await pool.query('SELECT * FROM teachers WHERE teacher_id=$1',[id])).rows[0],
    create: async ({ user_id, subject_ids }) => {
        const result = await pool.query(
            'INSERT INTO teachers (user_id,subject_ids) VALUES ($1,$2) RETURNING *',
            [user_id, subject_ids]
        );
        return result.rows[0];
    }
};

module.exports = Teacher;
