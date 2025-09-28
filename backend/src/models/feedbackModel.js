const pool = require('../db');

const Feedback = {
    create: async ({ student_id, message }) => {
        const result = await pool.query(
            'INSERT INTO feedback (student_id,message) VALUES ($1,$2) RETURNING *',
            [student_id,message]
        );
        return result.rows[0];
    },
    getByStudent: async (student_id) => {
        return (await pool.query('SELECT * FROM feedback WHERE student_id=$1',[student_id])).rows;
    }
};

module.exports = Feedback;
